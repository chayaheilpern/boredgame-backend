import "dotenv/config";
import jwt from "jsonwebtoken";

import User from "../../models/userSchema.js";
import errorHandler from "../../utilities/error.js";
import { securePassword } from "../../utilities/securePassword.js";


export const createToken = id => {
	const secret = process.env.SECRET;
	return jwt.sign({ id }, secret, { expiresIn: 84000 });
};

//signup Users, post request
export const signupUser = async (req, res) => {
	try {
    	//looking for existing user
		const existingUser = await User.findOne({
			email: req.body.email,
		}).lean(true);

		if (existingUser) {
			console.log(existingUser);
			return res.json(errorHandler(true, "A user exists with these credentials."));
		};

		const newUser = new User({
			userName: req.body.userName,
			email: req.body.email,
			password_digest: req.body.password_digest,
		});

		if (newUser) {
			//creating token
			const token = createToken(newUser._id);
			res.cookie("jwt", token, { maxAge: 840000 });

			//securing password
			newUser.password_digest = await securePassword(newUser.password_digest);

			res.json(
				errorHandler(
					false,
					`Hi ${newUser.userName}! A warm welcome to my User API!`,
					{ user: newUser._id }
				)
			);
			await newUser.save();

		} else {
			res.json(errorHandler(true, "Error Registering a new user."));
		};
	} catch (error) {
		res.json(errorHandler(true, "Error Registering a new user."));
	};
};
