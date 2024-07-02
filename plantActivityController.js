// // controller/activityController.js
// import Activity from '../models/activitySchema.js';
// import User from '../models/userSchema.js';
// import Plant from '../models/plantSchema.js';

// const DEFAULT_ACTIVITIES = [
//   'Watering',
//   'Fertilizing',
//   'Adding manure',
//   'Checking for pests',
//   'Cleaning',
//   'Repotting',
//   'Turning the soil'
// ];

// // Get activities for a specific user and plant
// export const getActivities = async (req, res) => {
//   const { username, plantName } = req.params;
  
//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     const plant = await Plant.findOne({ name: plantName, user: user._id });
//     if (!plant) {
//       return res.status(404).json({ success: false, message: 'Plant not found' });
//     }

//     let activities = await Activity.find({ user: user._id, plant: plant._id });
//     if (activities.length === 0) {
//       const defaultActivities = DEFAULT_ACTIVITIES.map(activity => ({
//         name: activity,
//         user: user._id,
//         plant: plant._id
//       }));
//       activities = await Activity.insertMany(defaultActivities);
//     }

//     res.status(200).json({ success: true, activities });
//   } catch (error) {
//     console.error("Error fetching activities:", error);
//     res.status(500).json({ success: false, message: 'Server Error', error: error.message });
//   }
// };

// // Update activity status
// export const updateActivityStatus = async (req, res) => {
//   const { activityId } = req.params;
//   const { done } = req.body;

//   try {
//     const activity = await Activity.findById(activityId);
//     if (!activity) {
//       return res.status(404).json({ success: false, message: 'Activity not found' });
//     }
//     activity.done = done;
//     activity.lastChecked = done ? new Date() : null;
//     await activity.save();
//     res.status(200).json({ success: true, activity });
//   } catch (error) {
//     console.error("Error updating activity status:", error);
//     res.status(500).json({ success: false, message: 'Server Error', error: error.message });
//   }
// };
