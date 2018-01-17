import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const response = {
  data: [
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
  ]
};

global.fetch = jest.fn().mockImplementation(() => {
  return new Promise((resolve, reject) => {
    resolve({ json: () => response });
  });
});

it('renders without crashing', () => {
  const component = document.createElement('div');
  ReactDOM.render(<App />, component);

  expect(component).toMatchSnapshot();
});
