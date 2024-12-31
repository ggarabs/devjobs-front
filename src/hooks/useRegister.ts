import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { registerUser, RegisterData } from "../services/registerService";
import { RegisterFormInputs } from "../pages/RegisterPage";
import { useNavigate } from "react-router-dom";

const useRegister = (): UseMutationResult<any, Error, RegisterFormInputs> => {
  const navigate = useNavigate();
  return useMutation<any, Error, RegisterFormInputs>({
    mutationFn: async (registerData: RegisterFormInputs) => {
      const data: RegisterData = {
        username: registerData.username,
        password: registerData.password,
        roles: [registerData.role],
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
