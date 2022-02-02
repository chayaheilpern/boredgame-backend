import express from "express";
import defaultController from "../controllers/defaultController.js";
import { signupUser } from "../controllers/userControls/signup.js";
// import { authRequired } from "../controllers/auth/authController.js";

// import { fetchAllPosts, deletePost, updatePostById, findPostById, createPost } from "../controllers/post/post.controller.js"; //USER CONTROLLER
// import { signUpUser, loginUser, logoutUser } from "../controllers/auth/authController.js"; //AUTH CONTROLLER

const Router = express.Router();

// Home Route
Router
    .get("/", defaultController)

    //Create/Signup User
    .post("/signup", signupUser)

    // // Get all post(s)
    // .get("/posts", fetchAllPosts)

    // //Create a new post
    // .post("/new", createPost)

    // // Login Route
    // .post("/login", loginUser)

    // // Logout User
    // .get("/logout", logoutUser)

    // //Delete post
    // .delete('/delete/:id', deletePost)

    // // Updating post
    // .put("/update/:id", updatePostById)

    // // Finding post by id
    // .get("/post/:id", findPostById)
    
export default Router;
