import {listaDisco} from './listaDisco.js'

export class disco{

    constructor(total){
        this.total = total * 1000
        this.lista = new listaDisco()
    }

    //Getters

    /*getOcupado(){
        return(this.ocupado)
    }*/

    getTotal(){
        return(this.total)
    }

    getLista(){
        return(this.lista)
    }

    //Setter

    setOcupado(nuevo){
        this.ocupado = nuevo
    }


}