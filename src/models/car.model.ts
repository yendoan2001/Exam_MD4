import {model, Schema} from "mongoose";
import Brand from "./brand.model";

const carSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please include car name']
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    },
    price: {
        type: Number,
        required: [true, 'Please include price']
    },
    description: {
        type: String,
    }
});

const Car = model('Car', carSchema);

export default Car;