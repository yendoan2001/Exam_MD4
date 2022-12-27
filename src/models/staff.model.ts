import {model, Schema} from "mongoose";
import Branch from "./branch.model";

const staffSchema = new Schema({
    code: {
        type: String,
        required: [true, 'Please include code']
    },
    name: {
        type: String,
        required: [true, 'Please include name']
    },
    branch: {
        type: Schema.Types.ObjectId,
        ref: 'Branch'
    },
    age: {
        type: Number,
        required: [true, 'Please include age']
    },
    salary: {
        type: Number,
        required: [true, 'Please include salary']
    }

});
const Staff = model('Staff', staffSchema);

export default Staff;