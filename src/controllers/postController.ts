import { Post } from '../models/post';
import { Response, Request } from 'express';

class PostController {
    getPosts = async (request: Request, response: Response) => {
        const post = await Post.find({});
        return response.status(200).send(post);
    }
}

export default new PostController();