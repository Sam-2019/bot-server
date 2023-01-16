import mongoose from 'mongoose'
import { dataSchema } from '../schema/index.js'
export const Posts = mongoose.model("Posts", dataSchema);

