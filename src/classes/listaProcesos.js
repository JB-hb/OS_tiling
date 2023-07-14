import { lista } from "./lista";

export class listaProcesos extends lista{
    getOcupado(nodo = this.root, ocupado = 0){
        if(this.isEmpty() === true){
            return 0
        }else{
            ocupado += nodo.getContent().getMemoria()
            if(nodo.getSig()){
                return(this.getOcupado(nodo.getSig(), ocupado))
            }else{
                return(ocupado)
            }
        }  
    }

    getLength(nodo = this.root, cont = 0){
        if(this.isEmpty() === true){
            return 0
        }else{
            cont ++
            if(nodo.getSig()){
                return(this.getLength(nodo.getSig(), cont))
            }else{
                return(cont)
            }
        }  
    }
}