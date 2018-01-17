import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

it('renders an empty element when selected video is undefined', () => {
  const component = document.createElement('div');
  ReactDOM.render(<Modal selected={ undefined } />, component);

  expect(component.innerHTML).toBe('');
  expect(component).toMatchSnapshot();
});

it('renders the original video when a media object is provided', () => {
  const selected = {
    id: 1,
    images: {
      preview: { mp4: 'https://enda.ie/filename-01.mp4' },
      original: { mp4: 'https://enda.ie/filename-01.mp4' }
    }
  };

  const component = document.createElement('div');
  ReactDOM.render(<Modal selected={ selected } />, component);

  const video = component.querySelector('video');
  expect(video.src).toBe('https://enda.ie/filename-01.mp4');

  expect(component).toMatchSnapshot();
});