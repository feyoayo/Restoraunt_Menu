const initialState = {
    menu: [
    ],
    loading: true,
    error: false,
    item: {},
}
const reducer = (state = initialState, action) => {
    switch (action.type){
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
                menu: state.menu,
                loading: false,
                error: true,
            };
        case 'ITEM_LOADED':
            return {
                menu: state.menu,
                loading: false,
                error: state.error,
                item: action.payload
            }
        default:
            return state;
    }

}

export default reducer;