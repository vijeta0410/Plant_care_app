import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
    common_name: String,
    scientific_name: String,
    air_purifying: Boolean,
    pollution_tolerant: Boolean,
    medicinal: Boolean,
    edible: Boolean,
    flowering: Boolean,
    poisonous: Boolean,
    pet_safe: Boolean,
    pet_toxic: Boolean,
    care: String,
    height: String,
    season: String,
    flower_color: String,
    leaf_color: String,
    leaf_size: String,
    growth_medium: String,
    watering_frequency: String,
    temperature: String,
    sunlight: String,
    soil: String,
    edibility: String,
    fertilizing_frequency: String,
    fertilizer: String,
    pests: String,
    disease: String,
    humidity: String,
    misting_frequency: String,
    rotation: String,
    repotting: String,
    reproduction: String,
    sowing_month: String,
    harvesting_month: String,
    general_information: String,
    url: String

    // Add other fields as per your dataset structure
}, { collection: 'plantsDataset' });

const Plant = mongoose.model("Plant", plantSchema);

export default Plant;
