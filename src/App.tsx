import React from "react";
import { Login } from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Posts } from "pages/posts";
import { ProtectedRoute } from "components/ProtectedRoute";
import { useAuthStore } from "stores/stores/authStore";

function App() {
  const queryClient = new QueryClient();
  const { isLoggedIn, username } = useAuthStore();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col h-screen">
        {isLoggedIn && (
          <div className="flex pt-5 pb-5 bg-blue-500 items-center justify-center relative">
            <div className="text-xl font-semibold text-white">
              {username} posts
            </div>
            <button className="absolute right-4 ml-auto text-white border-2 border-white hover:bg-white hover:text-blue-500 rounded-lg p-4 mr-4">
              Logout
            </button>
          </div>
        )}
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Posts />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
