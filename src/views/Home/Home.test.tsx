import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import store from '../../utils/reduxStore/reduxStore';
import language from '../../assets/language/language';

test('renders the site header', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>,
  );
  expect(screen.getByText(language.HEADER_TITLE)).toBeInTheDocument();
});
