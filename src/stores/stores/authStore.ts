import { create } from "zustand";

interface AuthStore {
  username: string | null;
  password: string | null;
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  username: null,
  password: null,
  isLoggedIn: false,
  login: async (username: string, password: string) => {
    set({ username, password, isLoggedIn: true });
  },
  logout: () => set({ username: null, password: null, isLoggedIn: false }),
}));
