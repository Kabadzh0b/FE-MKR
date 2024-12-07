import { useQuery } from "@tanstack/react-query";
import { Post } from "dataModels/Post";
import { useAxios } from "hooks/useAxios";
import { useAuthStore } from "../stores/authStore";

export const usePostsQuery = () => {
  const axios = useAxios();
  const { username } = useAuthStore();
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get<Post[]>(`/users/${username}/posts`);
      return data;
    },
  });
};
