import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import CurrencyCard from '../components/CurrencyCard';

describe('CurrencyCard component', () => {
  test('Test CurrencyCard button render correctly', () => {
    const currencyCard = render(
      <Provider store={store}>
        <BrowserRouter>
          <CurrencyCard />
        </BrowserRouter>
      </Provider>,
    );
    expect(currencyCard).toMatchSnapshot();
  });
});