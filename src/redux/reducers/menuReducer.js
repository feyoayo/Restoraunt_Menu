const initialState = {
    menu: [],
    loading: true,
    error: false,
    item: {},
    cardItems: [],
}

//constants
const MENU_LOADED = 'MENU_LOADED';
const MENU_REQUESTED = 'MENU_REQUESTED';
const MENU_ABORTED = 'MENU_ABORTED'
const ITEM_LOADED = 'ITEM_LOADED'
const DELETE_CARD_ITEM = 'DELETE_CARD_ITEM';
const ITEM_ADD_TO_CARD = 'ITEM_ADD_TO_CARD'


export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_LOADED:
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };
        case MENU_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case MENU_ABORTED:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case ITEM_LOADED:
            return {
                ...state,
                loading: false,
                item: action.payload
            }
        case DELETE_CARD_ITEM:
            // const index = state.cardItems.findIndex(item => item.id === action.payload)
            const newArr = state.cardItems.filter(item => item.id !== action.payload)
            return {
                ...state,
                // cardItems: [
                //     ...state.cardItems.slice(0, index),
                //     ...state.cardItems.slice(index + 1)
                // ]
                cardItems: [
                    ...newArr
                ]
            }
        // case ITEM_ADD_TO_CARD:
        //     const id = action.payload
        //     const elem = state.menu.find(el => el.id === id)
        //     console.log(elem)
        //     // const newItem = {
        //     //     title: elem.title,
        //     //     url: elem.url,
        //     //     id: elem.id,
        //     //     price: elem.price
        //     // }
        //     return {
        //         ...state,
        //         // cardItems: [...state.cardItems, newItem]
        //     }
        case ITEM_ADD_TO_CARD:
            return {
                ...state,
                // cardItems: [...state.cardItems, action.payload]
                cardItems: action.payload
                // cardItems: [...state.cardItems, newItem]
            }
        // case "SAVE_ITEM_TO_CART_ASYNC":
        //     return {...state, cardItems: action.payload}

        default:
            return state;
    }
}


//actions
//TODO: Transfer actions here

export const menuLoaded = (newMenu) => {
    return {
        type: MENU_LOADED,
        payload: newMenu
    }
}

export const menuRequested = () => {
    return {
        type: MENU_REQUESTED,
    }
}
export const menuAborted = (err) => {
    return {
        type: MENU_ABORTED,
        payload: err,
    }
}

export const itemLoaded = (item) => {
    return {
        type: ITEM_LOADED,
        payload: item
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_CARD_ITEM,
        payload: id
    }
}


export const addToCard = (obj) => {
    return {
        type: ITEM_ADD_TO_CARD,
        payload: obj
    }
}

//THUNK
export const saveToCartAsync = () => (dispatch, getState) => {
    const cartItems = getState().cardItems
    fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItems)
    })
    alert('Success moved to cart')
}

export const getCartItemsAsync = () => (dispatch) => {
    fetch(`http://localhost:3000/cart`).then(res => res.json()).then(res => dispatch(addToCard(res)))

}


// export const saveToCart = (items) => ({
//     type: 'SAVE_ITEM_TO_CART_ASYNC',
//     payload: items
// })
