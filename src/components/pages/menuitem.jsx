import React from "react";
import WithRestoService from "../hoc";
import {menuAborted, itemLoaded, menuRequested} from "../../actions";
import {connect} from "react-redux";
import Spinner from "../spinner";
import Error from "../error";
import './styles/itempage.scss'
import {Link} from "react-router-dom";

const MenuItemPage = (props) => {
    const {item, err} = props
    const [load, setLoad] = React.useState(true)
    React.useEffect(() => {
        props.menuRequested();
        const {RestoService} = props;
        RestoService.getMenuItem(props.id)
            .then(res => props.itemLoaded(res))
            .finally(() => setLoad(false))
    }, [])

    if (load) {
        return (
            <div className="item_page">
                <Spinner/>
            </div>
        )
    }

    if (err) {
        console.log(err)
        return (
            <Error/>
        )
    }

    return (
        <>
            <div className="menuitem__body">
                <Link to={'/'}>
                    <button className='menuitem__back-btn'>
                        Back
                    </button>
                </Link>
                <div className="menuitem__block">
                    <div className='menuitem__img-block'>
                        <img
                            src={item.url}
                            alt={item.title}/>
                            <button className="menuitem__img-block__btn">Add to cart</button>
                    </div>
                    <div className='menuitem__text-block'>
                        <div className="menuitem__text-block__title">
                            {item.title}
                        </div>
                        <div className="menuitem__text-block__category">Category: <span>{item.category}</span>
                        </div>
                        <div className="menuitem__text-block__price">Price: <span>{item.price}$</span></div>

                    </div>
                </div>

            </div>
        </>

    )
}
//TODO Component
const mapStateToProps = (state) => {
    return {
        // menuItems: state.menu,
        // loading: state.loading,
        err: state.error,
        item: state.item
    }
}

const mapDispatchToProps = {
    menuRequested,
    menuAborted,
    itemLoaded,
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuItemPage));