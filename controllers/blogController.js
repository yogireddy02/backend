import blogs from '../data/blogs.js';

//GET all blogs
export const getBlogs = (req, res) => {
  res.json(blogs);
};

//POST all blogs

export const addBlog = (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ message: "All fields required" });
  }
  const newBlog = { id: blogs.length + 1, title, content, author };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
};

