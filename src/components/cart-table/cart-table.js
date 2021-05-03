import React from 'react';
import './cart-table.scss';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const CartTable = () => {
    const history = useHistory();
    const {cardItems} = useSelector((state) => state)
    const backHandler = () => {
        history.goBack()
    }
    //

    return (
        <>
            <div>
                <button className='cart__back-btn' onClick={backHandler}>
                    Back
                </button>
            </div>
            <div className="cart__title">Ваш заказ:</div>
            {cardItems.map(({url, title, price, id}) => {
                return (
                    <div key={id} className="cart__list">
                        <div className="cart__item">
                            <img className='cart__item-img' src={url} alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{price}$</div>
                            <div className="cart__close">&times;</div>
                        </div>
                    </div>
                )
            })}
        </>
    );
}
;

export default CartTable;
