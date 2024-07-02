import { Product } from '../models/productsSchema.js';
import ErrorHandler from '../middlewares/errorMiddleware.js';

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            success: true,
            products
        });
    } catch (error) {
        console.error(error);
        return next(new ErrorHandler(error.message, 400));
    }
};