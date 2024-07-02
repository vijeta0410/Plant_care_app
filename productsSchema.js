import mongoose from 'mongoose';

// Define the product schema
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true, // Trims whitespace from the product name
    },
    useOfProduct: {
        type: String,
        required: true,
        trim: true, // Trims whitespace from the use of product
    }
});

// Create the Product model from the schema
export const Product = mongoose.model('Product', productSchema);
