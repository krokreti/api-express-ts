import mongoose, { Schema } from 'mongoose';

const PostSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: Object,
        required: true
    }
}, {
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema);

export { Post };