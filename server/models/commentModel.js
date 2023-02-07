import mongoose, { Schema } from 'mongoose';

const commentSchema = mongoose.Schema(
	{
		postId: {
			type: Schema.Types.ObjectId,
			ref: 'Post',
			required: true,
		},
		text: {
			type: String,
		},
		commentFrom: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
