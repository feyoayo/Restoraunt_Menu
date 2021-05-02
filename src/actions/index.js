const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    }
}
const menuAborted = (err) => {
    return {
        type: 'MENU_ABORTED',
        payload: err,
    }
}

const itemLoaded = (item) => {
    return {
        type: 'ITEM_LOADED',
        payload: item
    }
}


const addToCard = (id) => {
    return {
        type: "ITEM_ADD_TO_CARD",
        payload: id
    }
}


export {
    menuLoaded,
    menuRequested,
    menuAborted,
    itemLoaded,
    addToCard
}
