import express from 'express';
import PostController from '../controllers/postController';

const router = express.Router();

router.get('/posts', PostController.getPosts)

export { router as PostRouter };
