import React, { useState } from "react";
import SignUpForm from "./Form/SignUpForm";
import authApi from "apis/auth";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        user: {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      };
      await authApi.signUp(payload);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignUpForm
      name={name}
      setName={setName}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      passwordConfirmation={passwordConfirmation}
      setPasswordConfirmation={setPasswordConfirmation}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUp;
