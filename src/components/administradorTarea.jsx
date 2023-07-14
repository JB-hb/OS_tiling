import React from "react";
import { useApp } from "../context/contextApps";
import '../style/task.css'

export const Administrador = () => {

    const { memory, disk} = useApp()

    return(
        <div className="task">
            <div className="listaProcesos">
                <ul>
                    {
                        memory.getProcesos().isEmpty() === false &&
                        memory.getProcesos().getNodos().map(app => {
                            return(
                                <li>
                                    <p>{app.getContent().getNombre()}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="memoriaInfo">
                    <h3>Memoria</h3>
                    <h1>{memory.getProcesos().getOcupado()}/{memory.getCapacidad()}</h1>
            </div>
            <div className="discoInfo">
                    <h3>Disco</h3>
                    <h1>{disk.getLista().getPesoTotal()}/{disk.getTotal()}</h1>
            </div>
        </div>
    )
}