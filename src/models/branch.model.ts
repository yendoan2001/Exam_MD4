import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})

const Branch = mongoose.model('Branch', branchSchema);

export default Branch;