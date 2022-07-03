import { api } from "./api";

export async function postDestino(destino){
    const response = await api.post('/destinos/cadastrar', destino, {
        headers: {
            authorization: localStorage.getItem('token')
        }
    });
    return response.data;
}

export async function login(user) {
    const response = await api.post('/login', user, {
    });
    return response;
}