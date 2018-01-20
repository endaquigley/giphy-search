import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './Thumbnail';

it('renders an image element with the correct src', () => {
  const source = 'https://enda.ie/filename-01.gif';

  const component = document.createElement('div');
  ReactDOM.render(<Thumbnail source={ source } />, component);

  const image = component.querySelector('img');
  expect(image.src).toBe('https://enda.ie/filename-01.gif');
  
  expect(component).toMatchSnapshot();
});