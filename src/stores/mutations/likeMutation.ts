import { useMutation } from "@tanstack/react-query";
import { useAxios } from "hooks/useAxios";
import { useAuthStore } from "stores/stores/authStore";

interface LikeMutationProps {
  postId: string;
  isLiked: boolean;
}

export const useLikeMutation = (setIsLiked: (isLiked: boolean) => void) => {
  const axios = useAxios();
  const { username } = useAuthStore();
  return useMutation({
    mutationKey: ["like"],
    mutationFn: async ({ postId, isLiked }: LikeMutationProps) => {
      if (isLiked) {
        const { data } = await axios.put(
          `users/${username}/posts/${postId}/like`
        );
        return data;
      }
      const { data } = await axios.delete(
        `users/${username}/posts/${postId}/like`
      );
      return data;
    },
    onSuccess: (data, variables) => {
      setIsLiked(!variables.isLiked);
    },
  });
};
