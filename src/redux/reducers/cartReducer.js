const initialState = {
    cardItems: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case "POST_CART_ITEM":
            return {
                ...state
            }
    }
}


//ActionCreator
export const postCartItem = (obj) => ({
    type: 'POST_CART_ITEM',
    payload: obj,
})
