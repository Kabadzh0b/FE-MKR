import { useMutation } from "@tanstack/react-query";
import { useAxios } from "hooks/useAxios";
import { useAuthStore } from "stores/stores/authStore";

interface LikeMutationProps {
  content: string;
}

export const useNewPostMutation = (refetchPosts: () => void) => {
  const axios = useAxios();
  const { username } = useAuthStore();
  console.log(username);
  return useMutation({
    mutationKey: ["newPost"],
    mutationFn: async ({ content }: LikeMutationProps) => {
      const { data } = await axios.post(`users/${username}/posts`, {
        content,
      });
      return data;
    },
    onSuccess: (data, variables) => {
      refetchPosts();
    },
  });
};
