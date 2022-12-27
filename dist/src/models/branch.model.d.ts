import mongoose from "mongoose";
declare const Branch: mongoose.Model<{
    name?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
}>>;
export default Branch;
