import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import GoodCard from './index';

//Тест рендер компонента, который использует store
test('GoodCard Render witch STORE', () => {

	const initialState = { output: 10, User: { item: null } };
   	const mockStore = configureStore();
    let store;

  const element = {
  	PRICE: '',
  	ID: '', 
  	TITLE: '',
  	DISCR: '', 
  	IMG: '',
  }
  store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
            	<GoodCard element={element}/>
            </Provider>
         )
});