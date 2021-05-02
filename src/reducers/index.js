const initialState = {
    menu: [],
    loading: true,
    error: false,
    item: {},
    cardItems: [{
        "title": "Cesar salad",
        "price": 12,
        "url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
        "category": "salads",
        "id": 1
    },
        {
            "title": "Pizza Margherita",
            "price": 10,
            "url": "http://v.img.com.ua/b/orig/9/f8/0ec35ab54c1be68ced597584c07d6f89.jpg",
            "category": "pizza",
            "id": 2
        },],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false,
                error: state.error,
            };
        case 'MENU_REQUESTED':
            return {
                menu: state.menu,
                loading: true,
                error: state.error,
                item: state.item
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
        default:
            return state;
    }

}

export default reducer;