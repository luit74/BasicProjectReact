import { useState } from "react"

export const RandomBgColor = () =>{
    const [color , setColor] = useState("#000000")
    const [typeOfColor , setTypeOfColor] = useState("hex");

    const randomColorUtility = (length) =>{
        return Math.floor(Math.random()*length)
    }

    const handleCreateHexColor = () =>{
        const hex = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
        let hexColor = "#"

        for(let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor)
        
        
    }
    const handleCreateRgbColor = () =>{
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        let rgb = `rgb(${r},${g},${b})`;
        setColor(rgb)
    }

    return (
        <>
             <div style={{
                // margin:"auto",
                textAlign:"center",
                height:"100vh",
                width:"100vw",
                color:"black",
                background:color
            }} >
            <button onClick={()=>setTypeOfColor("hex")} >Create Hex Color</button>
            <button onClick={()=>setTypeOfColor("rgb")} >Create RGB Color</button>
            <button onClick={typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor} >Generate Random Color</button>
            <div style={{
                display:"flex",
                flexDirection:"column",
                fontSize:"60px"
            }} >
                <h1>{typeOfColor}</h1>
                <h3>{color}</h3>
            </div>
            </div>
        </>
    )
}