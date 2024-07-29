import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import { type } from "os";
const videoSchema = new Schema({
    videoFile:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:Number,
        require:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});
videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("video",videoSchema);