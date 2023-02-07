import mongoose, { Schema } from 'mongoose';

const postPreviewSchema = mongoose.Schema(
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
	},
	{
		timestamps: true,
	}
);

const PostPreview = mongoose.model('PostPreview', postPreviewSchema);

export default PostPreview;
