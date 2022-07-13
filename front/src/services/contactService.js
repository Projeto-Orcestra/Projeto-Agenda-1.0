import { api } from "./api"

export const criarContato = async (token, contatoData) => {
    return await api.post("/contato/criar", contatoData, {
        headers: { "auth-token": token },
    })
}

export const getContatos = async (token) => {
    return await api
        .get("/contato/", {
            headers: { "auth-token": token },
        })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err
        })
}
