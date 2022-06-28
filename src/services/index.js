import { api } from "./api";

export async function postDestino(destino){
    const response = await api.post('/formulario/destinos', destino, {
    });
    return response.data;
}

export async function login(user) {
    const response = await api.post('/login', user, {
    });
    return response;
}