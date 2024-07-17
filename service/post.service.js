let { postSchema } = require("../models");

let createPost = (body) => {
    console.log(body, "service");
    return postSchema.create(body);
};
let findAllPosts = () => {
    return postSchema.find().populate('author', 'username');
};
let findPostById = (id) => {
    return postSchema.findById(id).populate('author', 'username');
};
let updatePost = (id, body) => {
    return postSchema.findByIdAndUpdate(id, body, { new: true });
};
let deletePost = (id) => {
    return postSchema.findByIdAndDelete(id);
};

module.exports = { createPost, findAllPosts, findPostById, updatePost, deletePost };
