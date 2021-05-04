import React from 'react';
import './cart-table.scss';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {deleteItem, getCartItemsAsync} from "../../redux/reducers/menuReducer";

const CartTable = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const {cardItems} = useSelector((state) => state)
    const state = useSelector((state) => state)
    const backHandler = () => {
        history.goBack()
    }
    const deleteHandler = (id) => {
        dispatch(deleteItem(id))
    }

    React.useEffect(() => {
        dispatch(getCartItemsAsync())
    }, [])
        return (
        <>
            <div>
                <button className='cart__back-btn' onClick={backHandler}>
                    Back
                </button>
            </div>
            <div className="cart__title">Ваш заказ:</div>
            {cardItems.length > 0 ? cardItems.map(({url, title, price, id}) => {
                return (
                    <div key={id} className="cart__list">
                        <div className="cart__item">
                            <img className='cart__item-img' src={url} alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{price}$</div>
                            <div onClick={()=> deleteHandler(id)} className="cart__close">&times;</div>
                        </div>
                    </div>
                )
            }) : <h1>Nothing in cart yet</h1>}

        </>
    );
}
;

export default CartTable;
