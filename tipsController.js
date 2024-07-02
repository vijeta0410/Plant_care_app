import Tip from '../models/tipsSchema.js';
import ErrorHandler from '../middlewares/errorMiddleware.js';

// Controller to get all tip details
export const getAllTips = async (req, res, next) => {
  try {
    const tips = await Tip.find({});
    res.status(200).json({
      success: true,
      tips
    });
  } catch (error) {
    console.error("Error fetching tips:", error);
    return next(new ErrorHandler(error.message, 500));
  }
};
