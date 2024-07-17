let { postService } = require("../service");

let createPost = async (req, res) => {
    try {
        let body = req.body;
        let post = await postService.createPost(body);
        res.status(201).json({
            message: "Post created successfully",
            post
        });
    } catch (err) {
        console.error(err, "Error creating post");
        res.status(500).json({ message: err.message });
    }
};

let findAllPosts = async (req, res) => {
    try {
        let posts = await postService.findAllPosts();
        res.status(200).json({
            message: "Posts fetched successfully",
            posts
        });
    } catch (err) {
        console.error(err, "Error fetching posts");
        res.status(500).json({ message: err.message });
    }
};

let findPostById = async (req, res) => {
    try {
        let { id } = req.params;
        let post = await postService.findPostById(id);
        res.status(200).json({
            message: "Post fetched successfully",
            post
        });
    } catch (err) {
        console.error(err, "Error fetching post");
        res.status(500).json({ message: err.message });
    }
};

let updatePost = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        let post = await postService.updatePost(id, body);
        res.status(200).json({
            message: "Post updated successfully",
            post
        });
    } catch (err) {
        console.error(err, "Error updating post");
        res.status(500).json({ message: err.message });
    }
};

let deletePost = async (req, res) => {
    try {
        let { id } = req.params;
        await postService.deletePost(id);
        res.status(200).json({
            message: "Post deleted successfully"
        });
    } catch (err) {
        console.error(err, "Error deleting post");
        res.status(500).json({ message: err.message });
    }
};




module.exports = {
    createPost,
    findAllPosts,
    findPostById,
    updatePost,
    deletePost
};
