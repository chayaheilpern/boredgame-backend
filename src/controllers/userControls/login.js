import bcrypt from "bcryptjs";

import User from "../../models/userSchema.js";
import { createToken } from "./signup.js";
import errorHandler from "../../utilities/error.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne(
      {
        email: email.toLowerCase()
      }
    ).select('username email password_digest');

    // If the user does not exist, throw an error.
    if (!user) {
      return res.json(errorHandler(true, "A user with this email address does not exist."));
    };

    // Compare their password to the stored password digest.
    const auth = await bcrypt.compare(password, user.password_digest);

    // If the password is incorrect, tell the user.
    if (!auth) {
      return res.json(errorHandler(true, "Your password is incorrect."));
    };

    const { userName } = user;
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      maxAge: 840000,
    });

    res.json(errorHandler(false, `Welcome back ${email}.`, {
      user,
      token
    }));
  } catch (error) {
    return res.json(errorHandler(true, "Error logging in user. Please contact project owner."));
  };
};
