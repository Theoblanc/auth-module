import React from "react";

import { Layout } from "./Layout.styled";

const LayoutPresenter = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default LayoutPresenter;
