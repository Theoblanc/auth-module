import React from "react";
import renderer from "react-test-renderer";
import Login from "../index";

describe("[Layout render]", () => {
  const container = renderer.create(<Login />).toJSON();

  it("[should be render", () => {
    expect(container).toMatchSnapshot();
  });
});
