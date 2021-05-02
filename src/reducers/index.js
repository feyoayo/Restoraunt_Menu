const initialState = {
    menu: [],
    loading: true,
    error: false,
    item: {},
    cardItems: [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true,
            };
        case 'MENU_ABORTED':
            return {
                ...state,
                loading: false,
                error: true,
            };
        case 'ITEM_LOADED':
            return {
                ...state,
                loading: false,
                item: action.payload
            }
        case 'DELETE_CARD_ITEM':
            return {
                ...state,
            }
        case 'ITEM_ADD_TO_CARD':
            const id = action.payload
            const elem = state.menu.find(el => el.id === id)
            const newItem = {
                title: elem.title,
                url: elem.url,
                id: elem.id,
                price: elem.price
            }
            console.log(state)
            return {
                ...state,
                cardItems: [...state.cardItems, newItem]
                // cardItems: [
                //     ...state.cardItems,
                //     newItem
                // ]
            }

        default:
            return state;
    }

}

export default reducer;
