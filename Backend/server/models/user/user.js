import mongoose from "mongoose";
const timeStamps = {
    timeStamps: true,
    collection: 'user'
}

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    user_id: {
        type: String
    },
    user_location: {
        type: String
    },
    user_info: {
        name: { type: String },
        mobile: { type: String }
    },
    password: {
        type: String
    },
    vehicle_info: [{ type: String }]
},
    timeStamps
)

module.exports = mongoose.model('user', userSchema);