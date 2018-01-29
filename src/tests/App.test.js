import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import fetchMock from 'fetch-mock';
import store from '../store';
import App from '../App';

it('renders without crashing', () => {
  fetchMock.get(new RegExp('https://api.giphy.com/v1/gifs/search/*'), {
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
  });
  
  const component = document.createElement('div');
  ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>,
    component
  );
  
  expect(component).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(component);
});