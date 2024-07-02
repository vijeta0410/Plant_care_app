// activitySchema.js
import mongoose from 'mongoose';

export const activitySchema = new mongoose.Schema({
    activityName: {
        type: String,
        required: true,
    },
    isDone: {
        type: Boolean,
        default: false,
    },
    lastChecked: {
        type: Date,
        default: null,
    }
});

export const Activity = mongoose.model('Activity', activitySchema);
export default Activity;
