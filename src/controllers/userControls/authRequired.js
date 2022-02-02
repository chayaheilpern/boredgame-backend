import jwt from "jsonwebtoken";
import "dotenv/config";
import errorHandler from "../../utilities/error.js";

export const authRequired = (req, res, next) => {
	const SECRET = process.env.SECRET || "home";
  // const token = req.cookies.jwt;
  // console.log(SECRET);
  // console.log(req.headers.cookie);
  // console.log(req.headers);
  const stoken = req.headers.cookie;
  const token = stoken.split("=")[1];
  // console.log(token);

	if (token) {
		jwt.verify(token, SECRET, (error, decodedTkn) => {
			if (error) {
				return res.json(errorHandler(true, "first"))
					// .redirect("/login");
      } else {
        // res.send(decodedTkn)
				next();
			}
		});
	} else {
		res.json(errorHandler(true, "second"));
	}
};
