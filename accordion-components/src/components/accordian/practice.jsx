import { useState } from "react"
import data from "./data"
import "./style.css"

export const Practice = () => {

    const [select, setSelect] = useState(null);
    const [enableMultipleSelection , setEnableMultiSelection] = useState(false)
    const [multiple , setMultiple] = useState([])

    function handleSingleSelect(getCurrId) {
        setSelect(select === getCurrId ? null : getCurrId)
    }
    function handleMultipleSelect(getCurrentId){
        let copyMultiple = [...multiple]
        let findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)

        if(findIndexOfCurrentId === -1){
            copyMultiple.push(getCurrentId)
        }else{
            copyMultiple.splice(findIndexOfCurrentId , 1)
        }
        setMultiple(copyMultiple)
    }

    console.log(multiple);
    


    return (
        <div className="wrapper">
            <button onClick={()=>setEnableMultiSelection(!enableMultipleSelection)} >Enable Multiple Select</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map((dataItems) => (
                            <div onClick={enableMultipleSelection ?
                                () => handleMultipleSelect(dataItems.id)
                                :() => handleSingleSelect(dataItems.id)} 
                                className="item">
                                <div 
                                    className="title">
                                    <h3>{dataItems.question}</h3>
                                    <span>+</span>
                                </div>
                                    <div>
                                        {
                                            select === dataItems.id || multiple.indexOf(dataItems.id) !== -1 ?
                                                <div className="content">
                                                    <h4>{dataItems.answer}</h4>
                                                </div>
                                                : null
                                        }
                                    </div>
                            </div>

                        ))
                        : null
                }
            </div>
        </div>
    )
}