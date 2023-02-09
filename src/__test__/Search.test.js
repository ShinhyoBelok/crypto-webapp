import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {
  test('Test SearchBar button render correctly', () => {
    const searchBar = render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      </Provider>,
    );
    expect(searchBar).toMatchSnapshot();
  });
});