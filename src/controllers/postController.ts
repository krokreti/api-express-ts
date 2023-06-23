import { Post } from '../models/post.entity';
import { Response, Request } from 'express';

class PostController {
    getPosts = async (request: Request, response: Response) => {
        const post = await Post.find({});
        return response.status(200).send(post);
    }

    savePost = async (request: Request, response: Response) => {
        const { title, imageUrl, content, creator } = request.body;

        const post = new Post({
            title: title,
            imageUrl: imageUrl,
            content: content,
            creator: creator,
        });
        Post.create(post);
        return response.status(200).send(post);
    }
}
// https://github.com/tomanagle/Mongoose-TypeScript-example/blob/master/src/controllers/user.controller.ts

export default new PostController();