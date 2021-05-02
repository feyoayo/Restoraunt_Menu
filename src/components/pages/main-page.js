import React, {useEffect} from 'react';
import MenuList from '../menu-list';
import {menuAborted, menuLoaded, menuRequested} from "../../actions";
import WithRestoService from "../hoc";
import {useDispatch, useSelector} from "react-redux";

const MainPage = (props) => {
    const {menu, loading, err} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(menuRequested());
        const {RestoService} = props
        RestoService.getMenuItems()
            .then(res => dispatch(menuLoaded(res))).catch(err => {
            dispatch(menuAborted(err))
        })
    }, [])

    return (
        <MenuList menuItems={menu} loading={loading} err={err}/>
    )
}

export default WithRestoService()(MainPage);
