import React, { useState } from "react";
import { useLoginMutation } from "stores/mutations/loginMutation";
import { useRegisterMutation } from "stores/mutations/registerMutation";

export const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const { mutate: loginMutation, isError: isLoginError } = useLoginMutation();
  const { mutate: registerMutation, isError: isRegisterError } =
    useRegisterMutation();

  const inputClasses = `w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
    isLoginError || isRegisterError ? "border-red-500" : ""
  }`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      registerMutation({ username, password, full_name: fullName });
      return;
    }
    loginMutation({ username, password });
  };

  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-100 bg-white">
      <h1 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        Login
      </h1>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <div>
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
        <div>
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
        {isRegister && (
          <div>
            <label
              className="block text-gray-600 font-medium mb-1"
              htmlFor="password"
            >
              Full Name
            </label>
            <input
              id="full_name"
              type="full_name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={inputClasses}
            />
          </div>
        )}
        {isLoginError ||
          (isRegisterError && (
            <p className="text-red-500">
              Invalid username or password {isRegister && "or full name"}
            </p>
          ))}
        <button
          type="button"
          onClick={() => setIsRegister((prev) => !prev)}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Switch to {isRegister ? "Login" : "Register"}
        </button>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
};
