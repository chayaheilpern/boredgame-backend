import User from "../../models/userSchema.js";
import errorHandler from "../../utilities/error.js";
import { logoutUser } from "./logout.js";

// Delete user profile:
export const deleteUser = async (req, res) => {
    try {
        User.findByIdAndRemove (
            req.params.id,
            { new: true },
            (error, deletedUser) => {
                if (deletedUser) {
                    logoutUser();
                    return res.json(errorHandler(false, "Deleting user. You have been logged out.", deletedUser))
                } else {
                    return res.json(errorHandler(true, "Error deleting user."))
                };
            }
        );
    } catch (error) {
        return res.json(errorHandler(true, "Error deleting user."));
    };
};
