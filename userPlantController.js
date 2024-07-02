import { UserPlant } from '../models/userPlantSchema.js';
import ErrorHandler from '../middlewares/errorMiddleware.js';

// Default activities for each plant
const defaultActivities = [
    { name: 'Watering', completed: false },
    { name: 'Fertilizing', completed: false },
    { name: 'Pruning', completed: false },
    { name: 'Adding Manure', completed: false },
    { name: 'Cleaning', completed: false }
];

// Controller to handle adding a new plant for a user
export const sendUserPlant = async (req, res, next) => {
    const { username, plantNames } = req.body;

    if (!username || !plantNames || !Array.isArray(plantNames)) {
        return next(new ErrorHandler("Invalid input data", 400));
    }

    try {
        let userPlant = await UserPlant.findOne({ username });

        if (userPlant) {
            const newPlantNames = plantNames.filter(plant => !userPlant.plants.some(p => p.name === plant));

            newPlantNames.forEach(plantName => {
                const newPlant = {
                    name: plantName,
                    activities: defaultActivities
                };
                userPlant.plants.push(newPlant);
            });
        } else {
            const plants = plantNames.map(plantName => ({
                name: plantName,
                activities: defaultActivities
            }));

            userPlant = new UserPlant({
                username,
                plants
            });
        }

        await userPlant.save();
        res.status(201).json({
            success: true,
            message: "Hurray!! Your plant has an account now!",
            plant: userPlant
        });
    } catch (error) {
        console.error(error);
        return next(new ErrorHandler(error.message, 400));
    }
};

// Controller to fetch all plants for a user based on their username
export const getUserPlants = async (req, res, next) => {
    const { username } = req.params;

    try {
        const userPlant = await UserPlant.findOne({ username });

        if (!userPlant) {
            return next(new ErrorHandler("User not found", 404));
        }

        res.status(200).json({
            success: true,
            plants: userPlant.plants,
        });
    } catch (error) {
        console.error(error);
        return next(new ErrorHandler(error.message, 400));
    }
};

// Controller to delete a plant for a user
export const deleteUserPlant = async (req, res, next) => {
    const { username, plantName } = req.params;

    if (!username || !plantName) {
        return next(new ErrorHandler("Username and plant name are required", 400));
    }

    try {
        const userPlant = await UserPlant.findOne({ username });

        if (!userPlant) {
            return next(new ErrorHandler("User not found", 404));
        }

        userPlant.plants = userPlant.plants.filter(plant => plant.name !== plantName);

        await userPlant.save();

        res.status(200).json({
            success: true,
            message: "Plant deleted successfully",
        });
    } catch (error) {
        console.error(error);
        return next(new ErrorHandler(error.message, 400));
    }
};

// Controller to get activities of a specific plant
export const getPlantActivities = async (req, res, next) => {
    const { username, plantName } = req.params;

    try {
        const userPlant = await UserPlant.findOne({ username });

        if (!userPlant) {
            return next(new ErrorHandler("User not found", 404));
        }

        const plant = userPlant.plants.find(p => p.name === plantName);

        if (!plant) {
            return next(new ErrorHandler("Plant not found", 404));
        }

        res.status(200).json({
            success: true,
            activities: plant.activities,
        });
    } catch (error) {
        console.error(error);
        return next(new ErrorHandler("Server Error", 500));
    }
};

// Controller to update activity status of a specific plant
// Controller to update activity status
// Controller to update activity status
// Controller to update activity status
// Controller to update activity status
export const updateActivityStatus = async (req, res, next) => {
    const { username, plantName, activityId } = req.params;
    const { checked } = req.body; // Extract the updated status from the request body
  
    try {
      // Find the user plant by username and plantName
      const userPlant = await UserPlant.findOne({ username });
      if (!userPlant) {
        return next(new ErrorHandler("User not found", 404));
      }
  
      // Find the plant by name
      const plant = userPlant.plants.find(plant => plant.name === plantName);
      if (!plant) {
        return next(new ErrorHandler("Plant not found", 404));
      }
  
      // Find the activity by activityId
      const activity = plant.activities.find(activity => activity._id.toString() === activityId);
      if (!activity) {
        return next(new ErrorHandler("Activity not found", 404));
      }
  
      // Update the activity status
      activity.completed = checked;
      await userPlant.save();
  
      res.status(200).json({
        success: true,
        message: "Activity status updated successfully",
        activity: {
          _id: activity._id,
          name: activity.name,
          completed: activity.completed
        },
      });
    } catch (error) {
      console.error(error);
      return next(new ErrorHandler("Server Error", 500));
    }
  };
  
  
  
  
  