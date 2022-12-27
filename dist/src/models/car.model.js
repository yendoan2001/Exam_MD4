"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please include car name']
    },
    branch: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    age: {
        type: Number,
        required: [true, 'Please include price']
    },
});
const Car = (0, mongoose_1.model)('Car', carSchema);
exports.default = Car;
//# sourceMappingURL=car.model.js.map