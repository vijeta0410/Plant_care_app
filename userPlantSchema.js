import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
    name: String,
    completed: { type: Boolean, default: false }
});

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    activities: [activitySchema]
});

const userPlantSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    plants: [plantSchema]
});

export const UserPlant = mongoose.model('UserPlant', userPlantSchema);
