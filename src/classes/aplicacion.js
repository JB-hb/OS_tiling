export class aplicacion {

    constructor(nombre, memoria, disco){
        this.nombre = nombre
        this.memoria = memoria
        this.disco = disco
    }

    //Getters
    getNombre(){
        return(this.nombre)
    }

    getMemoria(){
        return(this.memoria)
    }

    getDisco(){
        return(this.disco)
    }

}