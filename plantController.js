import Plant from "../models/plantSchema.js";

export const getPlants = async (req, res, next) => {
    try {
        // Build the filter object based on query parameters
        const filter = {};

        // Boolean filters
        if (req.query.air_purifying) filter.air_purifying = req.query.air_purifying === 'true';
        if (req.query.pollution_tolerant) filter.pollution_tolerant = req.query.pollution_tolerant === 'true';
        if (req.query.medicinal) filter.medicinal = req.query.medicinal === 'true';
        if (req.query.edible) filter.edible = req.query.edible === 'true';
        if (req.query.flowering) filter.flowering = req.query.flowering === 'true';
        if (req.query.poisonous) filter.poisonous = req.query.poisonous === 'true';
        if (req.query.pet_safe) filter.pet_safe = req.query.pet_safe === 'true';
        if (req.query.pet_toxic) filter.pet_toxic = req.query.pet_toxic === 'true';

        // Non-boolean filters
        if (req.query.common_name) filter.common_name = req.query.common_name;
        if (req.query.scientific_name) filter.scientific_name = req.query.scientific_name;
        if (req.query.care) filter.care = req.query.care;
        if (req.query.height) filter.height = req.query.height;
        if (req.query.season) filter.season = req.query.season;
        if (req.query.flower_color) filter.flower_color = req.query.flower_color;
        if (req.query.leaf_color) filter.leaf_color = req.query.leaf_color;
        if (req.query.leaf_size) filter.leaf_size = req.query.leaf_size;
        if (req.query.growth_medium) filter.growth_medium = req.query.growth_medium;
        if (req.query.watering_frequency) filter.watering_frequency = req.query.watering_frequency;
        if (req.query.temperature) filter.temperature = req.query.temperature;
        if (req.query.sunlight) filter.sunlight = req.query.sunlight;
        if (req.query.soil) filter.soil = req.query.soil;
        if (req.query.edibility) filter.edibility = req.query.edibility;
        if (req.query.fertilizing_frequency) filter.fertilizing_frequency = req.query.fertilizing_frequency;
        if (req.query.fertilizer) filter.fertilizer = req.query.fertilizer;
        if (req.query.pests) filter.pests = req.query.pests;
        if (req.query.disease) filter.disease = req.query.disease;
        if (req.query.humidity) filter.humidity = req.query.humidity;
        if (req.query.misting_frequency) filter.misting_frequency = req.query.misting_frequency;
        if (req.query.rotation) filter.rotation = req.query.rotation;
        if (req.query.repotting) filter.repotting = req.query.repotting;
        if (req.query.reproduction) filter.reproduction = req.query.reproduction;
        if (req.query.sowing_month) filter.sowing_month = req.query.sowing_month;
        if (req.query.harvesting_month) filter.harvesting_month = req.query.harvesting_month;
        if (req.query.general_information) filter.general_information = req.query.general_information;
        if (req.query.url) filter.url = req.query.url;

        // Log the filter object
        console.log('Filter object:', filter);

        // Query the database with the filter object
        const plants = await Plant.find(filter);

        // Log the query result
        console.log('Query result:', plants);

        res.status(200).json({
            success: true,
            count: plants.length,
            data: plants
        });
    } catch (error) {
        console.error('Error fetching plants:', error);
        next(error);
    }
};
