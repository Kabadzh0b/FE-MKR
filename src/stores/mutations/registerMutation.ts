import { useMutation } from "@tanstack/react-query";
import { useAxios } from "hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "stores/stores/authStore";

export const useRegisterMutation = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const { login } = useAuthStore();
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async ({
      username,
      password,
      full_name,
    }: {
      username: string;
      password: string;
      full_name: string;
    }) => {
      const { data } = await axios.post(`/register`, {
        username,
        password,
        full_name,
      });
      return data;
    },
    onSuccess: (data, variables) => {
      login(variables.username, variables.password);
      navigate("/");
    },
  });
};
