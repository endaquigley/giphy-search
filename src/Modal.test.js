import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

it('renders the original video when a media object is provided', () => {
  const selected = {
    id: 1,
    images: {
      original: { mp4: 'https://enda.ie/filename-01.mp4' },
      preview_gif: { url: 'https://enda.ie/filename-01.gif' }
    }
  };

  const component = document.createElement('div');
  ReactDOM.render(<Modal selected={ selected } />, component);

  const video = component.querySelector('video');
  expect(video.src).toBe('https://enda.ie/filename-01.mp4');

  expect(component).toMatchSnapshot();
});