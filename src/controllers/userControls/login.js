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

    if (!user) {
      return res.json(errorHandler(true, "a user with this email address does not exist"));
    };

    const auth = await bcrypt.compare(password, user.password_digest);

    if (!auth) {
      return res.json(errorHandler(true, "the password is incorrect"));
    };

    const { userName } = user;
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      maxAge: 840000,
    });

    res.json(errorHandler(false, `Welcome back ${email}`, {
      user,
      token,
    }));
  } catch (error) {
    return res.json(errorHandler(true, "error logging in user"));
  };
};
