import React from "react";
import { Input, Button } from "@bigbinary/neetoui";
import { Link } from "react-router-dom";

const SignUpForm = ({
  name,
  email,
  password,
  passwordConfirmation,
  setName,
  setEmail,
  setPassword,
  setPasswordConfirmation,
  handleSubmit,
  loading,
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 ">
      <div className="w-full max-w-md">
        <h2
          className="mt-6 text-3xl font-extrabold leading-9
      text-center text-gray-700"
        >
          Sign Up
        </h2>
        <div className="text-center">
          <Link
            to="/login"
            className="mt-2 text-sm font-medium text-center
          text-bb-purple transition duration-150 ease-in-out
          focus:outline-none focus:underline"
          >
            Or Login Now
          </Link>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Name"
            value={name}
            placeholder="Oliver"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            value={email}
            label="Email"
            placeholder="oliver@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            value={password}
            label="Password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            value={passwordConfirmation}
            label="Password Confirmation"
            placeholder="********"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            size="large"
            label="Register"
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
