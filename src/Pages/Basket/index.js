import React from "react";
import { useSelector, useDispatch } from "react-redux";

import './style.css';

import { clearGoodToBasket } from "../../store/actons/good/good-action";

export const Basket = () => {
    const dispatch = useDispatch()
    const basketList = useSelector((state) => state.Good.basket);
    const handlerClearBasket = () => {
        dispatch(
            clearGoodToBasket()
        )
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
                basketList.map((element) => {
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
                                {element.COUNT}
                            </div>
                        </article>
                    )
                })
            }
        </React.Fragment>
    )
}