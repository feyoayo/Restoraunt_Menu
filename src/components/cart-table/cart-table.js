import React from 'react';
import './cart-table.scss';
import {useDispatch, useSelector} from "react-redux";
import {deleteCardItem} from "../../actions";

const CartTable = () => {
    const {cardItems} = useSelector((state) => state)
    const dispatch = useDispatch()

    const onDeleteHandler = (id) => {
        dispatch(deleteCardItem(id))
        console.log(`Deleted - ${id}`)
    }


    return (
        <>
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
};

export default CartTable;