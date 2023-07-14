import React, { useEffect, useState } from "react";
import '../style/desktop.css'
import { useApp } from "../context/contextApps";
import { Ventana } from "./ventana";
import { Status } from "./statusBar";

export const Desktop = () => {

    const { memory, cambioM, mouse, monitor } = useApp()
    const [cont, setCont] = useState(0)

    useEffect(()=>{

        if(memory.getProcesos().isEmpty() !== true){
            setCont(0)
            memory.getProcesos().getNodos().forEach(element => {
                setCont(curr => curr = curr + 1)
            });
        }else{
            setCont(0)
        }
    },[cambioM])
    
    const grid = {
        gridTemplateColumns:cont >= 2 ? `repeat(2,1fr)` : `repeat(${cont},1fr)`,
        gridTemplateRows:cont > 2 && `repeat(2,1fr)`,
    }

    return(
        <div 
            style={{
                display:'flex', 
                flexDirection:'column', 
                cursor: mouse === true?'auto':'none',
                display: monitor === true?'block':'none'
                }}>
            <Status/>
            <div className="containerDesktop" style={grid}>
                {
                    memory.getProcesos().isEmpty() === false &&
                    memory.getProcesos().getNodos().map(app => {
                        return(
                            <Ventana aplicacion={app}/>
                        )
                    })
                }
            </div>
        </div>
    )
}