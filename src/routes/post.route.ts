import express from 'express';
import PostController from '../controllers/postController';

const router = express.Router();

router.get('/posts', PostController.getPosts);
router.post('/post', PostController.savePost);

export { router as PostRouter };
