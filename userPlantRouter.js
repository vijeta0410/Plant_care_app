import express from 'express';
import { 
    sendUserPlant, 
    getUserPlants, 
    deleteUserPlant, 
    getPlantActivities, 
    updateActivityStatus 
} from '../controller/userPlantController.js';

const router = express.Router();

// Route to add a new plant for a user
router.post('/plants', sendUserPlant);

// Route to get all plants for a specific user
router.get('/plants/:username', getUserPlants);

// Route to delete a specific plant for a user
router.delete('/plants/:username/:plantName', deleteUserPlant);

// Route to get activities of a specific plant
router.get('/plants/:username/:plantName/activities', getPlantActivities);

// Route to update activity status of a specific plant
router.patch('/plants/:username/:plantName/activities/:activityId', updateActivityStatus);

export default router;
