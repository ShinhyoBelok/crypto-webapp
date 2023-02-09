import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Hero from '../components/Hero';

describe('Hero component', () => {
  test('Test Hero button render correctly', () => {
    const hero = render(
      <Provider store={store}>
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      </Provider>,
    );
    expect(hero).toMatchSnapshot();
  });
});
