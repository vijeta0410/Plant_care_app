import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"
import { User } from "../models/userSchema.js"
// import {generateToken} from "../utils/jwtToken.js"


export const userRegister = catchAsyncErrors(async(req, res, next) => {
    const {userName, password, email, phone} = req.body;
    if (!userName || ! password || ! email || ! phone) {
        return next (new ErrorHandler("Please fill full details!",400 ));
    }
    let user = await User.findOne({email});
    if(user) {
        return next (new ErrorHandler("User already Registered!",400 ));
    }
    user = await User.create({userName, password, email, phone});
    
    res.status(200).json({
        success : true,
        message : "User registered successfully :)"
    });

});

export const login = catchAsyncErrors(async(req,res,next) => {
    const {email, password} = req.body;
    if(!email || !password) {
        return next(new ErrorHandler("Please provide all details!",400));
    }
    const user = await User.findOne({email}).select("+password");
    if(!user) {
        return next(new ErrorHandler("Invalid email or password!",400));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password!",400));
    }
    res.status(200).json({
        success : true,
        message : "User logged in successfully :)"
    });
})