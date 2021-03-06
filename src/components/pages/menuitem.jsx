import React from "react";
import WithRestoService from "../hoc";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../spinner";
import Error from "../error";
import './styles/itempage.scss'
import {useHistory} from "react-router-dom";
import {addToCard, itemLoaded, menuRequested} from "../../redux/reducers/menuReducer";
import {saveToCartAsync} from '../../redux/reducers/menuReducer'


const MenuItemPage = (props) => {
    const [load, setLoad] = React.useState(true)
    let history = useHistory()
    const dispatch = useDispatch()
    const { item, err, cardItems } = useSelector(state => state)
    const  state = useSelector(state => state)
    const {RestoService} = props;

    React.useEffect(() => {
        dispatch(menuRequested());
        RestoService.getMenuItem(props.id)
            .then(res => dispatch(itemLoaded(res)))
            .finally(() => setLoad(false))
    }, [])

    if (load) {
        return (
            <div className="menuitem__body">
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
    const handlerBack = () => {
        history.goBack()
    }
    const addToCardHandler = (obj) => {
        dispatch(addToCard(obj))
        dispatch(saveToCartAsync())

    }

    return (
        <>
            <div className="menuitem__body">
                <button onClick={handlerBack} className='menuitem__back-btn'>
                    Back
                </button>
                <div className="menuitem__block">
                    <div className='menuitem__img-block'>
                        <img
                            src={item.url}
                            alt={item.title}/>
                            <button onClick={() => addToCardHandler(item)} className="menuitem__img-block__btn">Add to cart</button>
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


//I don't need to use connect with hooks


export default WithRestoService()(MenuItemPage)
