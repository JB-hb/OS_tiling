import React from "react";
import { BlockNotas } from "./blockNotas";
import { Administrador } from "./administradorTarea";
import { Terminal } from "./terminal";
import { useApp } from "../context/contextApps";

export const Ventana = ({aplicacion}) => {

    const {memory, setCambioM, cambioM} = useApp()

    const display = () => {
        switch (aplicacion.getContent().getNombre()) {
            case 'Block de Notas':
                return(<BlockNotas/>)
                break;
        
            case 'Terminal':
                return(<Terminal/>)
                break;
            
            case 'Administrador de Tareas':
                return(<Administrador/>)
                break;
        }
    }

    const handleClick = ({target:{id}}) => {
        console.log(id)
        memory.getProcesos().remove(parseInt(id))
        setCambioM(!cambioM)
    }

    return(
        <div style={{border:'none', borderRadius:'10px', margin:'5px', overflow:'hidden'}}>
            <div style={{
                backgroundColor:'#212729', 
                width:'100%',
                padding:'2px'
                }}>
                <div id={aplicacion.getId()} onClick={handleClick}
                style={{
                    backgroundColor:'red', 
                    borderRadius:'50%', 
                    width:'10px', 
                    height:'10px'
                    }}>
                </div>
            </div>
            {
                display()
            }
        </div>
    )
    
}