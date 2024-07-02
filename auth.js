export const isAuthenticatedUser = (req, res, next) => {
    if (!req.session.email) {
        return next(new ErrorHandler("Please login to access this resource", 401));
    }
    next();
};
