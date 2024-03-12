import Joi from "joi";
import response from "../../../../assets/response";
import responseMessage from "../../../../assets/responseMessage";
import apiError from "../../../helper/apiError";
import { userServices } from "../services/user";
const { createUser, findUser } = userServices;

export class userController {
    async createUser(req, res, next) {
        const validationSchema = joi.object({
            email: Joi.string().required(),
            user_location: Joi.string().required(),
            user_info: Joi.object().optional(),
            password: Joi.string().required(),
        })
        try {
            const { value } = await Joi.validate(req.body, validationSchema);
            console.log(value);
            const userRes = await findUser({ email: value.email });
            if (userRes) {
                throw apiError.alreadyExist(responseMessage.ALREADY_EXIST);
            }
            

        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}