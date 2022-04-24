import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import GoodCard from './index';
import {jsonGood} from '../../mocks/jsonGood'

/**
 * Импортируем компонент и тестовые данные для него
 * Cсылка на таблицу с методами - https://www.w3.org/TR/html-aria/#docconformance
 */
test('GoodCard Render witch STORE', () => {

  // инициализируем базовое состояние для стор
	const initialState = { output: 10, User: { item: null } };
  // инициализируем тестовую конфигурацию для стора 
  const mockStore = configureStore();
 //Инициализируем пустой стор
  let store;
  // Парсим данные из тестового JSON и берем первый элемент
  const element = JSON.parse(jsonGood)[0]

  //Заполнили стор 
  store = mockStore(initialState);

  // Отрендерил компонент со стором
  // Добавляю элемент из тестового массива в компонент, который тестируется
  const { getByText, getAllByRole, getByRole, getByAltText, getAllByText, queryAllByText } = render(
      <Provider store={store}>
        <GoodCard element={element}/>
      </Provider>
  )
  //Простая проверка на наличие элемента с указанным текстом в документе
  expect(getByText('Подробнее')).toBeInTheDocument()

  // Проверяем, отрисовался ли товар с нужным нам текстом
  expect(getByText('Хорошая куртка из кожи слона')).toBeInTheDocument()

  //Проверка на наличие ссылок в компоненте
  expect(getAllByRole("link")[0]).toBeInTheDocument()

  //Проверка на колчиство ссылок в компоненте (Их всего = 1 )
  expect(getAllByRole("link")).toHaveLength(1)

  //Проверяем какой текст находится в ссылке
  expect(getAllByRole("link")[0]).toHaveTextContent("Подробнее")

  //Проверяем заголовок на текст
  expect(getAllByRole("heading", 1)[0]).toHaveTextContent("Куртка из натуральной кожи")

  //Проверяем наличие изображения
  expect(getByRole("img")).toBeInTheDocument()
  
  //Проверяем на текст в ALT
  expect(getByAltText(element.DISCR)).toBeInTheDocument()

  //Проверка на отсутствие кнопки - Удалить
  expect(queryAllByText("Удалить")).toHaveLength(0)

});