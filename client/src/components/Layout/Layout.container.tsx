import React from "react";
import LayoutPresenter from "./Layout.presenter";
import cookie from "js-cookie";
import Router from "next/router";

const LayoutContainer: React.FC = ({ children }: any) => {

  return <LayoutPresenter>{children}</LayoutPresenter>;
};

export default LayoutContainer;
