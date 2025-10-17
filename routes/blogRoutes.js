import express from 'express';
import {getBlogs,addBlog} from '../controllers/blogController.js';

const router = express.Router();
//GET all blogs
router.get('/', getBlogs);

//POST all blog
router.post('/',addBlog);

export default router;