import jwt from "jsonwebtoken";
import "dotenv/config";

export const authRequired = (req, res, next) => {
	const SECRET = process.env.SECRET || "home";
  // const token = req.cookies.jwt;
  console.log(SECRET);
  console.log(req.headers.authorization);
  console.log(req.headers);
  const token = req.headers.authorization;
  console.log(token);
  
	if (token) {
		jwt.verify(token, SECRET, (error, decodedTkn) => {
			if (error) {
				return res
					.status(401)
					.json(errorHandler(true, "Auth Error"))
					// .redirect("/login");
			} else {
				next();
			}
		});
	} else {
		res.status(401).json(errorHandler(true, "Auth Error"));
	}
};