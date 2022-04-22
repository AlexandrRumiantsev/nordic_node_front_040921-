import axios from 'axios';

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, createRef } from 'react';


import './style.css';

import { clearGoodToBasket } from "../../store/actons/good/good-action";

import { useNavigate } from 'react-router-dom';

export const Basket = () => {

    const dispatch = useDispatch()
    const basketList = useSelector((state: any) => state.Good.basket);
    const [isOpenForm, handlerOpenForm] = useState(false)
    const navigate = useNavigate();

    const FIORef: any = createRef();
    const MailRef: any = createRef();

    useEffect(() => {

        if(sessionStorage.getItem("BASKET")){
            dispatch({
                type: 'SET_BASKET',
                payload: JSON.parse(sessionStorage.getItem("BASKET"))
            })
        }

    }, [])
    
    const handlerChengeCount = (operation: any, count: any, index: any) => {

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

    const handlerSendOrder = (e: any) => {
        e.preventDefault()
        const bot_token  = "5326920984:AAHfarkJWzUJki7DFAskea6sqfvdvCruoEo";
  	    const sUrl = `https://api.telegram.org/bot${bot_token}`;

        let adminsArray: any = {
            'Александр': 524721402,
            'Ярослав': 460209478,
            'Эмиль': 518715021,
        }

        let stringWithGood: any = ''
        //Составим список заказанных товаров
        JSON.parse(sessionStorage.BASKET).forEach((elem: any, key : any) => {

            stringWithGood += " Товар: " + elem.TITLE + ","
            stringWithGood += " Кол-во: " + elem.COUNT + ","
            stringWithGood += " Сумма: " + (elem.PRICE * elem.COUNT)

        })  

       
        Object.keys(adminsArray).forEach((element: any, key: any) => {
            //Тут нужно добавить данные клиента

            let messageTest: any = `Уважаемый ${element}, в магазине был оформлен заказ: ${stringWithGood}, свяжитесь с клиентом: ФИО: ${FIORef?.current?.value as any}, ПОЧТА: ${MailRef.current.value}
            `
            axios.post( sUrl + `/sendMessage?chat_id=${adminsArray[element]}&text=${messageTest}`).then(res => {
                
            })

        });
        
        // navigate может работать только внутри функционального компонента, но когда мы в роутере пишем
        // <Route path="/basket" element={ Basket() }></Route> - реакт не воспринимает Basket как компонент
        //заменить на;
        //<Route path="/basket" element={ <Basket /> }></Route>
        handlerClearBasket()
        navigate("/")

    }

        
    return (
        <>  
            <h1>
                Корзина
            </h1>
            <button onClick={()=> handlerClearBasket()}>
              Очистить корзину
            </button>
            {
                basketList.map((element: any, index: any) => {
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
                <input ref={FIORef} placeholder="ФИО"/>
                <input ref={MailRef} placeholder="ПОЧТА"/>
                <input onClick={ (e) => handlerSendOrder(e)} type="submit"/>
            </form>}
        </>
    )
}