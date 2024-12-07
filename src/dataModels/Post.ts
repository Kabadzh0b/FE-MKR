export interface Post {
  id: string;
  author: {
    full_name: string;
    posts: number;
    username: string;
  };
  content: string;
  likes: number;
  is_liked: boolean;
  created_at: string;
}
