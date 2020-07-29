import React from "react";
import LayoutPresenter from "./Layout.presenter";
import cookie from "js-cookie";
import jwtDecode from "jwt-decode";
import Router from "next/router";

const LayoutContainer = ({ children }) => {
  const token = cookie.get("accessToken");
  if (token) {
    Router.push("/");
  }

  return <LayoutPresenter>{children}</LayoutPresenter>;
};

export default LayoutContainer;
