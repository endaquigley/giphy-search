import React from "react";
import { render } from "react-testing-library";

import Modal from "../Modal";

import "react-testing-library/cleanup-after-each";

describe("Modal Component", () => {
  it("should not render when a media object is not provided", () => {
    const { container } = render(
      <Modal selected={undefined} updateSelected={jest.fn()} />
    );

    expect(container.firstChild).toBe(null);
  });

  it("renders the original video when a media object is provided", () => {
    const selected = {
      id: 1,
      images: {
        original: { mp4: "https://enda.ie/filename-01.mp4" },
        preview_gif: { url: "https://enda.ie/filename-01.gif" }
      }
    };

    const { container } = render(
      <Modal selected={selected} updateSelected={jest.fn()} />
    );

    const video = container.querySelector("video");
    expect(video.src).toBe("https://enda.ie/filename-01.mp4");

    expect(container.firstChild).toMatchSnapshot();
  });
});
