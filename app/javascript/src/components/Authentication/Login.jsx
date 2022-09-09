import React, { useState } from "react";
import LoginForm from "./Form/LoginForm";
import authApi from "apis/auth";
import { setToLocalStorage } from "utils/storage";
import { setAuthHeader } from "apis/axios";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        login: {
          email,
          password,
        },
      };
      const response = await authApi.login(payload);
      const {
        authentication_token: authToken,
        email: userEmail,
        id: userId,
        name: userName,
      } = response?.data;
      setToLocalStorage({ authToken, email: userEmail, userId, userName });
      setAuthHeader();
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
