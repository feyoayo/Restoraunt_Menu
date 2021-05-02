import React from 'react';
import './menu-list-item.scss';
import {useHistory, withRouter} from 'react-router-dom'

const MenuListItem = (props) => {
    const {title, price, url, category, id} = props.menuItem;
    const history = useHistory()

    const openItemDetail = (id) => {
        history.push(`/${id}`)
    }
    return (
        <li className="menu__item">
            <div  className="menu__title">
                {title}
            </div>
            <img className="menu__img"
                 src={url}
                 alt={title}/>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <div className={'menu__container-btn'}>
                <button onClick={() => openItemDetail(id)} className="menu__open-btn">
                    Open
                </button>
                <button onClick={() => props.addToCardHandler(id)} className="menu__btn">Add to cart</button>
            </div>
        </li>
    )
}

export default withRouter(MenuListItem);
