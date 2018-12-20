import React from "react";
import fetchMock from "fetch-mock";
import { render } from "react-testing-library";

import { App } from "../App";

jest.mock("../Modal", () => () => <div />);
jest.mock("../Gallery", () => () => <div />);
jest.mock("../Pagination", () => () => <div />);

import "react-testing-library/cleanup-after-each";

fetchMock.get(new RegExp("https://api.giphy.com/v1/gifs/search/*"), {
  data: [
    {
      id: 1,
      images: {
        original: { mp4: "https://enda.ie/filename-01.mp4" },
        preview_gif: { url: "https://enda.ie/filename-01.gif" }
      }
    },
    {
      id: 2,
      images: {
        original: { mp4: "https://enda.ie/filename-02.mp4" },
        preview_gif: { url: "https://enda.ie/filename-02.gif" }
      }
    }
  ]
});

describe("App Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<App query="dog" updateQuery={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });
});
