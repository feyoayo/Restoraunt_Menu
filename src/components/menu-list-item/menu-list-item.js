import React from 'react';
import './menu-list-item.scss';
import {Link, withRouter} from 'react-router-dom'

const MenuListItem = (props) => {
    const {title, price, url, category, id} = props.menuItem;
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
                    <Link to={`/${id}`}>
                        <button  className='menu__open-btn'>
                        Open
                        </button>
                    </Link>

                <button className="menu__btn">Add to cart</button>

            </div>
        </li>
    )
}

export default withRouter(MenuListItem);