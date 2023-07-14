import React, { useState } from "react";
import { useApp } from "../context/contextApps";

export const BlockNotas = () => {

    const{mouse, keyboard} = useApp()

    const [data, setData] = useState('')

    const handleChange = ({target:{value}}) => {
        if(keyboard === true){
            setData(curr => curr = value)
        }
    }

    return(
        <>
            <textarea 
            style={{
                width:'100%',
                minHeight:'100%', 
                padding:'10px',
                cursor: mouse === true?'auto':'none'
            }}
            value={data}
            onChange={handleChange}
            />
        </>
    )
}