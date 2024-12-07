import { useMutation } from "@tanstack/react-query";
import { useAxios } from "hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "stores/stores/authStore";

export const useLoginMutation = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const { login } = useAuthStore();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      const { data } = await axios.post(`/login`, {
        username,
        password,
      });
      return data;
    },
    onSuccess: (data, variables) => {
      login(variables.username, variables.password);
      navigate("/");
    },
  });
};
