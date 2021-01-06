import React from "react";
import LayoutPresenter from "./Layout.presenter";

const LayoutContainer: React.FC = ({ children }: any) => {
  return <LayoutPresenter>{children}</LayoutPresenter>;
};

export default LayoutContainer;
