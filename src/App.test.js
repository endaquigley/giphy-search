import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const response = {
  data: [
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
        preview: { mp4: 'https://enda.ie/filename-01.mp4' },
        original: { mp4: 'https://enda.ie/filename-01.mp4' }
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
