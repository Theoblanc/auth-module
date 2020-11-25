import React from "react";
import Layout from "../Layout.container";
import renderer from "react-test-renderer";

describe("[Layout render]", () => {
  const container = renderer.create(<Layout></Layout>).toJSON();
  console.log(container);

  it("[should be render", () => {
    expect(container).toMatchSnapshot();
  });
});
