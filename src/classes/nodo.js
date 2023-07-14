export class nodo{
    constructor(id, objeto){
        this.content = objeto
        this.id = id
        this.sig = null
    }

    //Getter

    getContent(){
        return(this.content)
    }

    getId(){
        return(this.id)
    }

    getSig(){
        return(this.sig)
    }

    //Setter

    setSig(nodo){
        this.sig = nodo
    }
}