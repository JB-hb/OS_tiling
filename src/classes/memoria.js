import { listaProcesos } from "./listaProcesos"


export class memoria{
    constructor(){
        this.capacidad = 4000
        this.procesos = new listaProcesos()
    }

    getCapacidad(){
        return(this.capacidad)
    }

    getProcesos(){
        return(this.procesos)
    }

    agregarProceso(objeto){
        if((this.procesos.getOcupado() + objeto.getMemoria() <= this.capacidad) && (this.procesos.getLength() < 4)){
            this.procesos.add(objeto)
        }else{
            if(this.procesos.getLength() === 4){
                alert('Maximo 4 Ventanas')
            }else{
                alert('Memoria llena')  
            }
        }
    }
}