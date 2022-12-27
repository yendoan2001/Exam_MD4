"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const staffSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: [true, 'Please include code']
    },
    name: {
        type: String,
        required: [true, 'Please include name']
    },
    branch: {
        type: mongoose_1.Schema.Types.ObjectId,
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
const Staff = (0, mongoose_1.model)('Staff', staffSchema);
exports.default = Staff;
//# sourceMappingURL=staff.model.js.map