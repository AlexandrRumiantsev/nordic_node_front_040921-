import {render} from '@testing-library/react'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import {Catalog} from './index';
// Тест на проверку заголовка
test("check title page", () => {


    //Базовая эммитация стора
    // инициализируем базовое состояние для стор
	const initialState = { Good: { list: [], filteredList: [], error: null}, User: { item: null } };
    // инициализируем тестовую конфигурацию для стора 
    const mockStore = configureStore();
   //Инициализируем пустой стор
    let store;
    store = mockStore(initialState);


	// рендерим компонент
	const {getByRole, getAllByRole} = render(
        <Provider store={store}>
            <Catalog />
        </Provider>
    );
	// получить заголовок страницы и установить ожидание одного элемента от теста
    // ДОДЕЛАТЬ!
	//expect(getByRole("heading", 1)).toBeInTheDocument()
	//expect(getAllByRole("heading", 1)).toHaveLength(1)
})