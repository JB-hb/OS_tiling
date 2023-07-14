import React, { useState } from "react";
import '../style/terminal.css'
import { useApp } from "../context/contextApps";

export const Terminal = () => {

    const {
        disk, 
        memory, 
        block, 
        taskManager, 
        terminal, 
        setCambioM, 
        cambioM, 
        setMemory,
        mouse,
        keyboard
    } = useApp()

    const [direccion, setDireccion] = useState('/Desktop')
    const [input, setInput] = useState('')
    const [result, setResult] = useState([])

    const handleChange = ({target:{value}}) => {
        if(keyboard === true){
            setInput(curr => curr = value)
        }
    }
    const handleSubmit = (even) => {
        even.preventDefault()
        const comand = input.split(' ')
        let list = []
        switch(comand[0]){
            case 'ls':
                disk.getLista().getNodos().forEach(element => {
                    list = [...list, element.getContent().getNombre()]
                });
                setResult(curr => curr = list)
                setInput('')
                break;
            case 'block':
                memory.agregarProceso(block)
                setMemory(curr => curr = memory)
                setCambioM(!cambioM)
                setInput('')
                break;
            case 'task':
                memory.agregarProceso(taskManager)
                setMemory(curr => curr = memory)
                setCambioM(!cambioM)
                setInput('')
                break;
            default:
                list = ['Ingrese Comando Valido']
                setResult(curr => curr = list)
                setInput('')
        }
    }

    return(
        <div className="terminal">
            <form onSubmit={handleSubmit}>
                <p>{direccion}</p>
                <input 
                type="text" 
                value={input} 
                onChange={handleChange} 
                style={{cursor: mouse === true?'auto':'none'}}
                />
                <div>
                    {result.map(element => {
                        return(
                            <p>{element}</p>
                        )
                    })}
                </div>
            </form>
        </div>
    )
}