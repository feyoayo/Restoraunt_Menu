import React from 'react';
import MenuList from '../menu-list';
import {menuAborted, menuLoaded, menuRequested} from "../../actions";
import WithRestoService from "../hoc";
import {connect} from "react-redux";

const MainPage = (props) => {
    const {menuItems, loading, err} = props
    React.useEffect(() => {
        props.menuRequested();
        const {RestoService} = props
        RestoService.getMenuItems()
            .then(res => props.menuLoaded(res)).catch(err => {
            props.menuAborted(err)
        })
    }, loading)

    return (
        <MenuList menuItems={menuItems} loading={loading} err={err}/>
    )
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        err: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuAborted
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MainPage));
