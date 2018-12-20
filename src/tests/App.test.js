import React from "react";
import { render } from "react-testing-library";

import App from "../App";

jest.mock("../Navigation", () => () => <div />);
jest.mock("../Modal", () => () => <div />);
jest.mock("../Gallery", () => () => <div />);
jest.mock("../Pagination", () => () => <div />);

import "react-testing-library/cleanup-after-each";

describe("App Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
