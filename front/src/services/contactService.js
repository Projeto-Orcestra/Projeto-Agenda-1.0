import { api } from "./api"

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

export const criarContato = async (token, contatoData) => {
    return await api
        .post("/contato/criar", contatoData, {
            headers: { "auth-token": token },
        })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err
        })
}

export const editarContato = async (token, contato) => {
    const url = "/contato/atualizar/" + contato._id
    console.log(url)
    return await api
        .put(url, contato, {
            headers: { "auth-token": token },
        })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err
        })
}
