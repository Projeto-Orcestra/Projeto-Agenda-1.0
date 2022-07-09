import { api } from "./api"

export const criarContato = async (userId, contatoData) => {
    return await api.post("/contact/criar", contatoData, {
        headers: { "auth-token": userId },
    })
}
