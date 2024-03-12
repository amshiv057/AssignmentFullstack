import userModel from "../../../models/user/user";

const userServices = {
    createUser: async (insertObj) => {
        return await userModel.create(insertObj);
    },

    findUser: async (query) => {
        return await userModel.findOne(query);
    },

    updateUser: async (query, updateObj) => {
        return await userModel.findOneAndUpdate(query, updateObj, { new: true })
    }
}

module.exports = { userServices };