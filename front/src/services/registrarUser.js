import { api } from "./api"

export const registrarUser = async (userData) => {
    return await api
        .post("/user/registrar", userData)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err
        })
}
