import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { registerUser, RegisterData } from "../services/registerService";
import { useNavigate } from "react-router-dom";

const useRegister = (): UseMutationResult<any, Error, RegisterData> => {
  const navigate = useNavigate();
  return useMutation<any, Error, RegisterData>({
    mutationFn: async (registerData: RegisterData) => {
      const data: RegisterData = {
        username: registerData.username,
        password: registerData.password,
        roles: ["ROLE_CANDIDATE"],
      };
      console.log(data);
      const response = await registerUser(data);
      console.log("Resposta do servidor: ", response);
      return response;
    },
    onSuccess: () => {
      console.log("Cadastro bem-sucedido:");
      navigate("/");
    },
    onError: (error: Error) => {
      console.error("Erro ao se cadastrar: ", error.message);
    },
  });
};

export default useRegister;
