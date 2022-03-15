import { api } from "./api";

export async function postDestino(destino){
    const response = await api.post('/formulario/destinos', destino, {
        headers: {}
    });
    return response.data;
}