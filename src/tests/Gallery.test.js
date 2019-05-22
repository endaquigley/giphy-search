import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "react-testing-library";

import { Gallery } from "../Gallery";

const mockStore = configureStore([]);

describe("Gallery Component", () => {
  it("renders no image elements when data is empty", () => {
    const store = mockStore({
      data: []
    });

    const { container } = render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );

    const images = container.querySelectorAll("img");
    expect(images.length).toBe(0);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders an image element for each element in the data array", () => {
    const store = mockStore({
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

    const { container } = render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );

    const images = container.querySelectorAll("img");
    expect(images.length).toBe(2);

    expect(images[0].src).toBe("https://enda.ie/filename-01.gif");
    expect(images[1].src).toBe("https://enda.ie/filename-02.gif");

    expect(container.firstChild).toMatchSnapshot();
  });
});
