import React, { useEffect, useState } from "react";
import { useApp } from "../context/contextApps";
import {AiOutlineExclamationCircle} from 'react-icons/ai'

export const Status = () =>{

    const [hora, setHora] = useState('00')
    const [min, setMin] = useState('00')
    const {setMemory, memory, terminal, setCambioM, cambioM} = useApp()

    const getHora = () => {
        const fecha = new Date()
        setHora(fecha.getHours())
        setMin(fecha.getMinutes())
    }

    const handleClick = () => {
        memory.agregarProceso(terminal)
        setMemory(curr => curr = memory)
        setCambioM(!cambioM)
    }
    
    setInterval(getHora, 1000)

    return(
        <div style={{
            backgroundColor:'#384145', 
            color:'white', 
            justifyContent:'center', 
            alignItems:'center',
            flexDirection:'row',
            display:'flex',
            gap:'1em'
        }}>
            <p style={{margin:'0'}}>{`${hora}:${min < 10 ? '0'+min : min}`}</p>
            <AiOutlineExclamationCircle onClick={handleClick} size={20}/>
        </div>
    )
}