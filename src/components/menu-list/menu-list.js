import React from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import Spinner from "../spinner";
import Error from "../error";
import {addToCard, saveToCartAsync} from "../../redux/reducers/menuReducer";
import {useDispatch} from "react-redux";


const MenuList = (props) => {
    const {menuItems, loading, err} = props;
    const dispatch = useDispatch()


    const addToCardHandler = (obj) => {
        dispatch(addToCard(obj))
        dispatch(saveToCartAsync())
    }

    if (loading) {
        return <Spinner/>
    }
    if (err) {
        return (
            <Error/>
        )
    }
    return (
        <>
            <ul className="menu__list">
                { menuItems.map((item) => {
                    const {id} = item
                    return (
                        <>
                            <MenuListItem addToCardHandler={addToCardHandler} key={id} menuItem={item}/>

                        </>

                    )
                })}
            </ul>
        </>
    )
}

export default MenuList;
