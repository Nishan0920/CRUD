import mongoose, { Schema, Document, Model } from "mongoose";
const UserSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide a name"]
    },
    description: {
        type: String,
        required: [true, "Please provide a description"]
    }
});
const User = mongoose.models.User || mongoose.model("user", UserSchema);
export default User;
