import errorHandler from "../utilities/error.js";

const defaultController = async (req, res) => {
  res.json(errorHandler(false, "Home", "Welcome to our backend"))
}

export default defaultController;
