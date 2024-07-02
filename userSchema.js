import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema ({
    userName : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true,
        minlength : 8,
        validate : [validator.isStrongPassword, "Please enter a strong password"],
        select : false,
    },

    email : {
        type : String,
        required : true,
        unique : true,
        validate : [validator.isEmail, "Please enter a valid email address"]
    },

    phone : {
        type : String,
        required : true,
        unique : true,
        validate : [validator.isMobilePhone, "Please enter a valid phone number (enter number with country code and no spaces)"]
    }
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({_id : this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn : process.env.JWT_EXPIRES,
    });
}

export const User = mongoose.model("User", userSchema);
export default User;