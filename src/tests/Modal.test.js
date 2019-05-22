import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "react-testing-library";

import { Modal } from "../Modal";

const mockStore = configureStore([]);

describe("Modal Component", () => {
  it("should not render when a media object is not provided", () => {
    const store = mockStore({
      selected: undefined
    });

    const { container } = render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    expect(container.firstChild).toBe(null);
  });

  it("renders the original video when a media object is provided", () => {
    const store = mockStore({
      selected: {
        id: 1,
        images: {
          original: { mp4: "https://enda.ie/filename-01.mp4" },
          preview_gif: { url: "https://enda.ie/filename-01.gif" }
        }
      }
    });

    const { container } = render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    const video = container.querySelector("video");
    expect(video.src).toBe("https://enda.ie/filename-01.mp4");

    expect(container.firstChild).toMatchSnapshot();
  });
});
