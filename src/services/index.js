import { api } from "./api";

export async function postDestino(destino){
    const response = await api.post('/formulario/destinos', destino, {
        headers: {}
    });
    return response.data;
}

export async function login(user) {
    console.log(user);
    const response = await api.post('/login', user, {
        headers: {}
    });
    return response;
}