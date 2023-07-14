import React, {createContext, useContext, useState} from "react";
import { memoria } from '../classes/memoria.js'
import { disco } from '../classes/disco.js'
import { aplicacion } from "../classes/aplicacion.js";

export const contextApp = createContext()

export const useApp = () => {
    const context = useContext(contextApp)
    return context
}

export const AppProvider = ({children}) =>{

    const block = new aplicacion('Block de Notas', 20, 500)
    const taskManager = new aplicacion('Administrador de Tareas', 300, 200)
    const terminal = new aplicacion('Terminal', 200, 300)

    const disk = new disco(225)
    const [memory, setMemory] = useState(new memoria())

    disk.getLista().add(block)
    disk.getLista().add(taskManager)
    disk.getLista().add(terminal)

    const [mouse, setMouse] = useState(true)
    const [keyboard, setKeyboard] = useState(true)
    const [monitor, setMonitor] = useState(true)

    const [cambioM, setCambioM] = useState(true)
    
    return(
        <contextApp.Provider value={{
            disk,
            memory,
            mouse,
            setMouse,
            keyboard,
            setKeyboard,
            monitor,
            setMonitor,
            block,
            cambioM,
            setCambioM,
            setMemory,
            terminal,
            taskManager
        }}>
            {children}
        </contextApp.Provider>
    )
}