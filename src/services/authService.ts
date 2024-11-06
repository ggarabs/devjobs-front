const API_URL = "http://localhost:8080/auth/login";

export interface LoginData {
    login: string;
}

export const loginUser = async (data: LoginData): Promise<any> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao fazer login');
    }

    const isJson = response.headers.get('content-type')?.includes('application/json');
    const resp = isJson ? await response.json() : {};
    console.log('Resposta JSON do servidor:', resp);

    return resp;
}