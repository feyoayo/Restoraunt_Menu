import {applyMiddleware, combineReducers, createStore} from "redux";
import {menuReducer} from "./reducers/menuReducer";
import {cartReducer} from "./reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//TODO
// const combinedReducers = combineReducers({menuReducer, cartReducer})

const store = createStore(menuReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
