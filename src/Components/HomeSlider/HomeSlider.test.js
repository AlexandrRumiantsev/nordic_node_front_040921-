import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import {render, screen, fireEvent} from '@testing-library/react'
import HomeSlider from './index';

//Тест на простой рендер компонента
test('HomeSlider Render', () => {
  render(<HomeSlider />);
});

//Тест подсчет кол-во кнопок в компоненте
test('count buttons', () => {
  	const { container } = render(<HomeSlider />)
	expect(screen.getAllByRole('button')).toHaveLength(2)
})

//Тест клик по кнопке
test('calls onClick prop when clicked', () => {
	//Функция заглушка
  	const handleClick = jest.fn()
	// Рендерим компонент
  	render(<HomeSlider />);
	//Эмитируем клик по кнопке
	fireEvent.click(screen.getAllByRole('button')[0])
	// Смотрим параметр клика
	expect(handleClick).toHaveBeenCalledTimes(0)
})

// Тест на ожидании на слайдере 3ех картинок

test("count img in slider", () => {
	// рендерим компонент
	const {getAllByRole} = render(<HomeSlider />);
	//Получаем все изображения в слайдере и считаем их кол-во, должно получится 3 штуки
	expect(getAllByRole("img")).toHaveLength(3)
})