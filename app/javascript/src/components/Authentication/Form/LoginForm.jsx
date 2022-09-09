import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "@bigbinary/neetoui";

const LoginForm = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
  loading,
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h2
          className="mt-6 text-3xl font-extrabold leading-9
        text-center text-bb-gray-700"
        >
          Sign In
        </h2>
        <div className="text-center">
          <Link
            to="/signup"
            className="mt-2 text-sm font-medium text-bb-purple
          transition duration-150 ease-in-out focus:outline-none
          focus:underline"
          >
            Or Register Now
          </Link>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            value={email}
            label="Email"
            placeholder="oliver@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            size="large"
            label="Sign In"
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
