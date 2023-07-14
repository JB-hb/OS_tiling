import { lista } from "./lista";

export class listaDisco extends lista{
    
    getPesoTotal(nodo = this.root, peso = 0){
        peso += nodo.getContent().getDisco()
        if(nodo.getSig()){
            return(nodo.getSig(), peso)
        }else{
            return(peso)
        }
    }

}