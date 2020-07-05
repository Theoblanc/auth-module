import React from "react";
import LayoutPresenter from "./Layout.presenter";

const LayoutContainer = ({ children }) => {
  return <LayoutPresenter>{children}</LayoutPresenter>;
};

export default LayoutContainer;
