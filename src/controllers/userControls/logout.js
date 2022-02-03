// Clears JWT cookie and sends user to root.
export const logoutUser = (req, res) => {
  res
    .cookie("jwt", "", { maxAge: 1 })
    .redirect("/")
};
