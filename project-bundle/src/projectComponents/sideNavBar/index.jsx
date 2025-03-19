import { MenuList } from "./menu-list"


export const TreeView = ({menus = []}) =>{
    return <div className="tree-view-container">
        <MenuList list={menus} />
    </div>
}