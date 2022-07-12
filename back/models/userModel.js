const { Schema, model } = require("mongoose")
const jwt = require("jsonwebtoken")
const config = require("config")

const userSchema = new Schema({
    nome: { type: String, required: true, minlength: 5 },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true, minlength: 5 },
})

userSchema.methods.gerarAuthToken = function () {
    const token = jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        config.get("jwtPrivateKey")
    )
    return token
}

const User = model("user", userSchema)

module.exports = {
    userSchema,
    User,
}
