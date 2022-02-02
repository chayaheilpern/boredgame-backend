import bcrypt from "bcryptjs";

export const securePassword = async password => {
	const salt = await bcrypt.genSalt(10); // adding 10 random chars
	const hashedPassword = await bcrypt.hash(password, salt); // hash pw w/ special/extra 10 chars
	return hashedPassword;
};