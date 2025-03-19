import { useState } from "react"
import { MenuList } from "./menu-list"
import { FaMinus , FaPlus } from "react-icons/fa"
import "./style.css"


export const MenuItems = ({item}) =>{
    const [displayCurrentChild , setDisplayCurrentChild] = useState({})

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChild({
            ...displayCurrentChild , 
            [getCurrentLabel] : ! displayCurrentChild[getCurrentLabel],
        })
        console.log(displayCurrentChild);
        
    }

    return <li>
        <div className="menu-item">
        <p>{item.label}</p>
        {
            item && item.children && item.children.length ? 
            <span onClick={()=>handleToggleChildren(item.label)} >
                {
                    displayCurrentChild[item.label] ? <FaMinus /> : <FaPlus />
                }
            </span> 
            : null
        }
        </div>
        {
            item && item.children && item.children.length > 0 && displayCurrentChild[item.label] ?
            <MenuList list={item.children} />
            :null
        }
    </li>
}