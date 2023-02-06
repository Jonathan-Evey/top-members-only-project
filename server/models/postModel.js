import mongoose, { Schema } from 'mongoose';

const postSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		comments: {
			type: Schema.Types.ObjectId,
			ref: 'Comment',
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Post = mongoose.model('Post', postSchema);

export default Post;
