import React, { useState, useEffect } from "react";
import './style.css';

export default function HomeSlider() {

    const listSliderElement = [
        {
            img: "https://s0.rbk.ru/v6_top_pics/media/img/6/73/756268699920736.jpg",
            text: "Одежда"
        },
        {
            img: "https://stjames.ru/upload/resize_cache/iblock/565/768_400_1/JL_708.jpg",
            text: "Одежда 1"
        },
        {
            img: "https://icdn.lenta.ru/images/2022/01/12/14/20220112141904701/wide_16_9_da7cf8887635ac25256b8df2edb7130d.jpeg",
            text: "Одежда 2"
        }
    ]

    const [prevSlider, setPrevSlider]  = useState(0);
    const [nextSlider, setNextSlider]  = useState(2);
    const [mainSlider, setMainSlider]  = useState(1);

    const handlerChangeSlider = (event, operation) => {

        /*
        operation == "plus" 
            ? setCurrentSlider(currentSlider + 1) 
            : setCurrentSlider(currentSlider - 1)
        */
        // Получили длину
        
        
        const length = listSliderElement.length - 1;
        
        // Проверяем тип операции
        if( operation == "plus" ) {
            // Сравниваем положение центрального слайда 
             if(mainSlider == length) {
                setMainSlider(0)
                setPrevSlider(length)
                setNextSlider(1)
             } else {
                setMainSlider(mainSlider + 1)
                setPrevSlider(mainSlider)
                setNextSlider(mainSlider + 2)
             } 

        }else { 
            if(currentSlider == 0) {
                setMainSlider(length)
            } else {
                setMainSlider(mainSlider - 1)
            }
        }

        /*
        if(mainSlider == 0) {
            setPrevSlider(length)
            setNextSlider(1)
        } else if(mainSlider == length){
            setPrevSlider(mainSlider - 1)
            setNextSlider(0)
        } else if(mainSlider == 1){
            setPrevSlider(mainSlider - 1)
            setNextSlider(0)
        }
        */
        
        


        /*
        currentSlider == 0 ? listSliderElement[listSliderElement.length-1]?.img : listSliderElement[currentSlider-1]?.img;
        
        currentSlider == listSliderElement.length - 1 ? listSliderElement[0]?.img : listSliderElement[currentSlider+1]?.img;
        
        listSliderElement[currentSlider]?.img;
        */

    }

    return(
        <section className="slider">
            <div className="slider-item">
                    <img 
                        className="slider-img-left" 
                        src={listSliderElement[prevSlider]?.img}
                    />
                    <img 
                        className="slider-img" 
                        src={listSliderElement[mainSlider]?.img}
                    />
                        <p className="slider-text"></p>
                    <img 
                        className="slider-img-right" 
                        src={listSliderElement[nextSlider]?.img}
                    />
            </div>
            <div className='panel'>
                <button onClick={(e) => handlerChangeSlider(e, "minus")}>
                    Назад
                </button>
                <button onClick={(e) => handlerChangeSlider(e, "plus")}>
                    Вперед
                </button>
            </div>
        </section>
    )
}