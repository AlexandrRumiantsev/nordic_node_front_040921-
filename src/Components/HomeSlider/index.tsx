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

        const length = listSliderElement.length - 1;

        const elemCalc = (index, operation) => {

            if(operation == 'next'){

                if(index == length){
                    index = 0
                }else index++
    
                return index
            }else{
                if(index == 0){
                    index = length
                }else index--
    
                return index
            }
            
        }

        setMainSlider(elemCalc(mainSlider, operation))
        setPrevSlider(elemCalc(prevSlider, operation))
        setNextSlider(elemCalc(nextSlider, operation))

        //Алгоритм назад Первый
        /* 
        setMainSlider(2)
        setPrevSlider(1)
        setNextSlider(0)
        */

        //Алгоритм назад Второй
        /*
        setMainSlider(0)
        setPrevSlider(2)
        setNextSlider(1)
        */

        //Алгоритм Вперед Первый
        /*
        setMainSlider(0)
        setPrevSlider(2)
        setNextSlider(1)
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
                <button onClick={(e) => handlerChangeSlider(e, "next")}>
                    Назад
                </button>
                <button onClick={(e) => handlerChangeSlider(e, "back")}>
                    Вперед
                </button>
            </div>
        </section>
    )
}