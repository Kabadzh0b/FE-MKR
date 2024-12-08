import { useQuery } from "@tanstack/react-query";
import { Post } from "dataModels/Post";
import { useAxios } from "hooks/useAxios";

export const usePostsQuery = (username: string) => {
  const axios = useAxios();

  return useQuery({
    queryKey: ["posts", username],
    queryFn: async () => {
      const { data } = await axios.get<Post[]>(`/users/${username}/posts`);
      return data;
    },
    retry: false,
    enabled: !!username,
  });
};
