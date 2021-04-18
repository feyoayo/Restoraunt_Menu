import React, {useEffect} from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Switch, Route} from 'react-router-dom'

import Background from './food-bg.jpg';
import MenuListItem from "../menu-list-item";
import MenuItemPage from "../pages/menuitem";
import {connect} from "react-redux";


const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}}
             className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path={'/'} exact component={MainPage}/>
                <Route path={'/cart'} component={CartPage}/>
                <Route path='/:id'
                       render={({match}) => {
                           const id = match.params.id;
                           return <MenuItemPage id={id}/>
                       }}/>
                <Route exact component={MainPage}/>
            </Switch>


        </div>
    )
}




export default App;