import "dotenv/config";
import jwt from "jsonwebtoken";

import errorHandler from "../../utilities/error.js";

export const authRequired = (req, res, next) => {
	const SECRET = process.env.SECRET || "home";
	const token = req.headers.cookie.split("=")[1];

	if (token) {
		jwt.verify(token, SECRET, (error, decodedTkn) => {
			if (error) {
				return res.json(errorHandler(true, "first"));
			} else {
				next();
			};
		});
	} else {
		res.json(errorHandler(true, "second"));
	};
};
