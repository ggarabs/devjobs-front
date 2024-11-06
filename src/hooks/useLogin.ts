import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { loginUser, LoginData } from "../services/authService";
import { useNavigate } from "react-router-dom";

const useLogin = (): UseMutationResult<any, Error, LoginData> => {
    const navigate = useNavigate();
    return useMutation<any, Error, LoginData>({
        mutationFn: async (loginData: LoginData) => {
            const response = await loginUser(loginData);
            console.log('Resposta do servidor: ', response);
            return response;
        },
        onSuccess: () => {
            console.log('Login bem-sucedido:');
            navigate('/')
        },
        onError: (error: Error) => {
            console.error('Erro ao fazer login: ', error.message);
        },
    });
};

export default useLogin;