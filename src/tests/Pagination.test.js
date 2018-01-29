import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from '../Pagination';

it('renders a disabled previous button on page 1', () => {
  const component = document.createElement('div');
  ReactDOM.render(<Pagination page={ 0 } />, component);

  expect(component.querySelectorAll('button')[0].disabled).toBe(true);
  expect(component.querySelectorAll('button')[1].disabled).toBe(false);

  expect(component).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(component);
});

it('renders an enabled previous button on pages greater than 1', () => {
  const component = document.createElement('div');
  ReactDOM.render(<Pagination page={ 1 } />, component);

  expect(component.querySelectorAll('button')[0].disabled).toBe(false);
  expect(component.querySelectorAll('button')[1].disabled).toBe(false);

  expect(component).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(component);
});