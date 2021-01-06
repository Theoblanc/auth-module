import React from "react";
import renderer from "react-test-renderer";
import Layout from "../Layout.container";

describe("[Layout render]", () => {
  const container = renderer.create(<Layout />).toJSON();
  console.log(container);

  it("[should be render", () => {
    expect(container).toMatchSnapshot();
  });
});
