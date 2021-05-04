import {postCartItem} from "../reducers/cartReducer";

export const putCartData = async (obj) => {
    return dispatch => {
        fetch('http://localhost:3000/cart', {
            method: 'POST',
            body: {"dsad": 'sdad'},
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(json => console.log(json))
    }
}
