import React from "react";
import '../style/control.css'
import {BsKeyboard, BsMouse} from 'react-icons/bs'
import {FiMonitor} from 'react-icons/fi'
import { useApp } from "../context/contextApps";

export const Control = () => {

    const {setMouse, setKeyboard, setMonitor} = useApp()

    const style = {
        color:'white',
        cursor:'pointer',
        margin:'10px'
    }

    const handleMouse = () => {
        setMouse(curr => curr = !curr)
    }
    const handleKey = () => {
        setKeyboard(curr => curr = !curr)
    }
    const handleMonitor = () => {
        setMonitor(curr => curr = !curr)
    }

    return(
        <div className="containerControl">
            <BsKeyboard size={80} style={style} onClick={handleKey}/>
            <BsMouse size={60} style={style} onClick={handleMouse}/>
            <FiMonitor size={80} style={style} onClick={handleMonitor}/>
        </div>
    )
}