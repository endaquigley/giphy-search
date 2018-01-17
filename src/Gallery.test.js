import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';

it('renders no video elements when data is empty', () => {
  const component = document.createElement('div');
  ReactDOM.render(<Gallery data={ [] } />, component);

  const videos = component.querySelectorAll('video');
  expect(videos.length).toBe(0);

  expect(component).toMatchSnapshot();
});

it('renders a video element for each element in the data array', () => {
  const data = [
    {
      id: 1,
      images: {
        preview: { mp4: 'https://enda.ie/filename-01.mp4' },
        original: { mp4: 'https://enda.ie/filename-01.mp4' }
      }
    },
    {
      id: 2,
      images: {
        preview: { mp4: 'https://enda.ie/filename-02.mp4' },
        original: { mp4: 'https://enda.ie/filename-02.mp4' }
      }
    }
  ];

  const component = document.createElement('div');
  ReactDOM.render(<Gallery data={ data } />, component);

  const videos = component.querySelectorAll('video');
  expect(videos.length).toBe(2);
  
  expect(videos[0].src).toBe('https://enda.ie/filename-01.mp4');
  expect(videos[1].src).toBe('https://enda.ie/filename-02.mp4');

  expect(component).toMatchSnapshot();
});