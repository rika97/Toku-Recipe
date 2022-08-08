import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    userName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    id: {
        type: String,
    },
});

const UserInfo = mongoose.model("User", userSchema);
export default UserInfo;