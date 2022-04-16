import React from "react";
import axios from 'axios';

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';


import './style.css';

import { clearGoodToBasket } from "../../store/actons/good/good-action";

import { useNavigate } from 'react-router-dom';

export const Basket = () => {
    const dispatch = useDispatch()
    const basketList = useSelector((state) => state.Good.basket);
    const [isOpenForm, handlerOpenForm] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {

        if(sessionStorage.getItem("BASKET")){
            dispatch({
                type: 'SET_BASKET',
                payload: JSON.parse(sessionStorage.getItem("BASKET"))
            })
        }

    }, [])
    
    const handlerChengeCount = (operation, count, index) => {

        if(operation == 'minus' && basketList[index].COUNT > 0)
            --count
        else if(operation == "plus") {
            ++count
        } 
        
        basketList[index].COUNT = count

        const basketJSON = JSON.stringify(basketList)

        sessionStorage.setItem("BASKET", null)
        sessionStorage.setItem("BASKET", basketJSON)
        
        dispatch({
            type: 'SET_BASKET',
            payload: JSON.parse(basketJSON)
        })

    }

    const handlerClearBasket = () => {
        dispatch(
            clearGoodToBasket()
        )
    }

    const handlerSendOrder = (e) => {
        e.preventDefault()
        const bot_token  = "5326920984:AAHfarkJWzUJki7DFAskea6sqfvdvCruoEo";
  	    const sUrl = `https://api.telegram.org/bot${bot_token}`;

        let adminsArray = {
            'Александр': 524721402,
            //'Ярослав': 460209478,
            //'Эмиль': 518715021,
        }

        Object.keys(adminsArray).forEach((element, key) => {
            //Тут нужно добавить данные клиента
            let messageTest = `
                Уважаемый ${element},
                в магазине был оформлен заказ созвонитесь с клиентом:

            `
            axios.post( sUrl + `/sendMessage?chat_id=${adminsArray[element]}&text=${messageTest}`).then(res => {
                
            })

        });
        
        // navigate может работать только внутри функционального компонента, но когда мы в роутере пишем
        // <Route path="/basket" element={ Basket() }></Route> - реакт не воспринимает Basket как компонент
        //заменить на;
        //<Route path="/basket" element={ <Basket /> }></Route>
        navigate("/")
        
        //после покупки нужно очищать корзину

    }

        
    return (
        <React.Fragment>
            
            <h1>
                Корзина
            </h1>
            <button onClick={()=> handlerClearBasket()}>
              Очистить корзину
            </button>
            {
                basketList.map((element, index) => {
                    return (
                        <article className="item-basket">
                            <div>
                                <img src={element.IMG} />
                            </div>
                            <div>
                                {element.TITLE}
                            </div>
                            <div>
                                {element.PRICE}
                            </div>
                            <div>
                                <button 
                                onClick={(e) => handlerChengeCount("minus", element.COUNT, index)}>
                                    -
                                </button>
                                    {element.COUNT}
                                <button
                                    onClick={(e) => handlerChengeCount("plus", element.COUNT, index)}
                                >+
                                </button>
                            </div>
                        </article>
                    )
                })
            }
            <button onClick={ (e) => handlerOpenForm(true)}>Офрормить заказ</button>
            {isOpenForm && <form>
                <input placeholder="ФИО"/>
                <input placeholder="ПОЧТА"/>
                <input onClick={ (e) => handlerSendOrder(e)} type="submit"/>
            </form>}
        </React.Fragment>
    )
}