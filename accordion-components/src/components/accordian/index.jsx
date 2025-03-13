import { useState } from "react"
import data from "./data"
import "./style.css"

export const Accordian = () => {
    const [select, setSelect] = useState(null)
    const [EnableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, SetMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        setSelect(getCurrentId === select ? null : getCurrentId)
        // if(select === getCurrentId){
        //     setSelect(null)
        // }

    }
    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
        
        
        if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
            else copyMultiple.splice(findIndexOfCurrentId, 1)
        SetMultiple(copyMultiple)
    }
    
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!EnableMultiSelection)} >Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map((dataItem) => (
                            <div className="item">
                                <div onClick={
                                    EnableMultiSelection
                                        ? () => handleMultiSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)}
                                    className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                    </div>
                                    <div>
                                        {/* {
                                        EnableMultiSelection
                                        ? multiple.indexOf(dataItem.id) !== -1 && (
                                        <div className="content" >{dataItem.answer}</div>)
                                        : select === dataItem.id &&  
                                         (<div className="content" >{dataItem.answer}</div>)
                                        } */}
                                        {
                                            select === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                                                <div className="content" >
                                                    <h4>{dataItem.answer}</h4>
                                                </div>
                                            ): null
                                        }
                                </div>
                            </div>))
                        : <div>No data present</div>
                }
            </div>
        </div>
    )
}

