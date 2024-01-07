// Create web server

// Creating web server for comment
const express = require("express");
const router = express.Router();
const Comment = require("../models/comment");
const Post = require("../models/post");
const User = require("../models/user");
const Like = require("../models/like");
const passport = require("passport");
const commentsController = require("../controllers/comments_controller");

// Creating route for creating comment
router.post("/create", passport.checkAuthentication, commentsController.create);

// Creating route for deleting comment
router.get(
  "/destroy/:id",
  passport.checkAuthentication,
  commentsController.destroy
);

module.exports = router;
