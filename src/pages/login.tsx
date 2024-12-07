import React, { useState } from "react";
import { useLoginMutation } from "stores/mutations/loginMutation";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: loginMutation, isError } = useLoginMutation();

  const inputClasses = `w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
    isError ? "border-red-500" : ""
  }`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation({ username, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md flex flex-col">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-4 flex-1">
          Login
        </h1>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-1"
              htmlFor="username"
            >
              Email
            </label>
            <input
              id="email"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={inputClasses}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClasses}
            />
          </div>
          {isError && (
            <p className="text-red-500">Invalid username or password</p>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
