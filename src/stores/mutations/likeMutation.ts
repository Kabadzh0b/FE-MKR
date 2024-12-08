import { useMutation } from "@tanstack/react-query";
import { useAxios } from "hooks/useAxios";

interface LikeMutationProps {
  postId: string;
  authorUsername: string;
  isLiked: boolean;
}

export const useLikeMutation = (setIsLiked: (isLiked: boolean) => void) => {
  const axios = useAxios();
  return useMutation({
    mutationKey: ["like"],
    mutationFn: async ({
      postId,
      authorUsername,
      isLiked,
    }: LikeMutationProps) => {
      if (isLiked) {
        const { data } = await axios.put(
          `users/${authorUsername}/posts/${postId}/like`
        );
        return data;
      }
      const { data } = await axios.delete(
        `users/${authorUsername}/posts/${postId}/like`
      );
      return data;
    },
    onSuccess: (data, variables) => {
      setIsLiked(!variables.isLiked);
    },
  });
};
