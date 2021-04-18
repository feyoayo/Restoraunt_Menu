import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import Spinner from "../spinner";
import Error from "../error";

class MenuList extends Component {
    render() {
        const {menuItems, loading, err} = this.props;



        const Menu = () => {

            return menuItems.map((item) => {
                const {id} = item
                return (
                        <MenuListItem  key={id} menuItem={item}/>

                )
            })
        };

        if (loading) {
            return <Spinner/>
        }
        if (err) {
            return (
                <Error/>
            )
        }
        return (
            <>
                <ul className="menu__list">
                    <Menu/>
                </ul>
            </>
        )
    }
}


// const mapStateToProps = (state) => {
//     return {
//         menuItems: state.menu,
//         loading: state.loading,
//         err: state.error
//     }
// }

// const mapDispatchToProps =( dispatch) => {
//     return {
//         menuLoaded: (newMenu) => {
//             dispatch(menuLoaded(newMenu))
//         }
//     }
// }


// const mapDispatchToProps = {
//     menuLoaded,
//     menuRequested,
//     menuAborted
// }

export default (MenuList);