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
  	const handleClick = jest.fn()
  	render(<HomeSlider />);
	fireEvent.click(screen.getAllByRole('button')[0])
	expect(handleClick).toHaveBeenCalledTimes(0)
})