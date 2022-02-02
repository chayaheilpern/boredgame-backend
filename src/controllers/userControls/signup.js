import "dotenv/config"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../../models/userSchema.js";
import errorHandler from "../../utilities/error.js";
import { securePassword } from "../../utilities/securePassword.js";

const secret = process.env.SECRET

export const createToken = id => {
  return jwt.sign({ id }, secret, { expiresIn: 84000 });
}
