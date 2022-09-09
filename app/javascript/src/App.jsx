import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "components/Dashboard";
import { setAuthHeader, registerIntercepts } from "apis/axios";
import { PageLoader } from "@bigbinary/neetoui";
import Review from "components/Review";
import { ToastContainer } from "react-toastify";
import SignUp from "components/Authentication/SignUp";
import Login from "components/Authentication/Login";
import { getFromLocalStorage } from "./utils/storage";
import PrivateRoute from "components/Common/PrivateRoute";

const App = () => {
  const [loading, setLoading] = useState(true);
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = authToken !== null;

  useEffect(() => {
    registerIntercepts();
    setAuthHeader(setLoading);
  }, []);

  if (loading) {
    <PageLoader />;
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/airlines/:slug" component={Review} />
        <PrivateRoute
          path="/"
          condition={isLoggedIn}
          redirectRoute="/login"
          component={Dashboard}
        />
      </Switch>
    </Router>
  );
};

export default App;
