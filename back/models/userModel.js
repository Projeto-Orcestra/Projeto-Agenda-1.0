import { Schema, model } from "mongoose"
import jwt from "jsonwebtoken"
import config from "config"

export const userSchema = new Schema({
    name: { type: String, required: true, minlength: 5 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
})

userSchema.methods.gerarAuthToken = function () {
    const token = jwt.sign(
        {
            _id: this._id,
            isAdm: this.isAdm,
        },
        config.get("jwtPrivateKey")
    )
    return token
}

export const User = model("user", userSchema)
