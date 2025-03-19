import { MenuItems } from "./menu-items"
import "./style.css"



export const MenuList = ({list = []}) =>{
    return <ul className="menu-list-container" >
        {
            list && list.length ? 
            list.map(listItem => <MenuItems item={listItem} />)
            : null
        }
    </ul>
}