import React from "react";
import API from "../utils/API.js";
import { Route, Redirect } from "react-router-dom";

/**
 * use specific route for logged user or not
 * @param Component
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (API.isAuth() === false) {
        return <Redirect to="<app>" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);