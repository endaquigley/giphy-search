import React from 'react';
import ReactDOM from 'react-dom';
import { Gallery } from '../Gallery';

it('renders no image elements when data is empty', () => {
  const component = document.createElement('div');
  ReactDOM.render(
    <Gallery
      data={ [] }
      fetchImages={ jest.fn() }
    />,
    component
  );
  
  const images = component.querySelectorAll('img');
  expect(images.length).toBe(0);

  expect(component).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(component);
});

it('renders an image element for each element in the data array', () => {
  const data = [
    {
      id: 1,
      images: {
        original: { mp4: 'https://enda.ie/filename-01.mp4' },
        preview_gif: { url: 'https://enda.ie/filename-01.gif' }
      }
    },
    {
      id: 2,
      images: {
        original: { mp4: 'https://enda.ie/filename-02.mp4' },
        preview_gif: { url: 'https://enda.ie/filename-02.gif' }
      }
    }
  ];

  const component = document.createElement('div');
  ReactDOM.render(
    <Gallery
      data={ data }
      fetchImages={ jest.fn() }
    />,
    component
  );

  const images = component.querySelectorAll('img');
  expect(images.length).toBe(2);
  
  expect(images[0].src).toBe('https://enda.ie/filename-01.gif');
  expect(images[1].src).toBe('https://enda.ie/filename-02.gif');

  expect(component).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(component);
});