const API_URL = "http://localhost:8080/auth/register";

export interface RegisterData {
  username: string;
  password: string;
  roles: [string];
}

export const registerUser = async (data: RegisterData): Promise<any> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Erro ao fazer cadastro");
  }

  const isJson = response.headers
    .get("content-type")
    ?.includes("application/json");
  const resp = isJson ? await response.json() : {};
  console.log("Resposta JSON do servidor:", resp);

  return resp;
};
