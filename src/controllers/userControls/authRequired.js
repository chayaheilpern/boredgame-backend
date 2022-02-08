import "dotenv/config";
import jwt from "jsonwebtoken";

import errorHandler from "../../utilities/error.js";


export const authRequired = (req, res, next) => {
	// Symetric key known to sender and receiver.
	const SECRET = process.env.SECRET || "home";

	// Authorization string for signed in user.
  const getToken = req.headers.cookie.split("=")[1];
  const token = getToken.split(";")[0];

	// If there is a token, verify that it is correct.
	if (token) {
		jwt.verify(token, SECRET, (error, decodedTkn) => {
			if (error) {
				return res.json(errorHandler(true, "Errot authorizing the user. Please contact project owner."));
			} else {
				next();
			};
		});
	} else {
		res.json(errorHandler(true, "No token found. Please contact project owner."));
	};
};
