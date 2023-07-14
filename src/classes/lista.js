import {nodo} from './nodo.js'

export class lista{
    constructor(){
        this.root = null
    }

    isEmpty(){
        if(this.root === null){
            return(true)
        }else{
            return(false)
        }
    }

    add(objeto, cont = 1, nod = this.root){
        if(this.isEmpty() === true){
            this.root = new nodo(cont, objeto)
        }else{
            if(nod.getSig() !== null){
                this.add(objeto, nod.getSig().getId() + 1, nod.getSig())
            }else{
                nod.setSig(new nodo(nod.getId() + 1,objeto))
            }
        }
    }

    getNodo(nodoId, nodo = this.root){
        if(this.isEmpty === true){
            throw new Error('La Lista Esta Vacia')
        }else{
            if(nodoId === nodo.getId()){
                return(nodo)
            }else{
                if(nodo.getSig() !== null){
                    return(this.getNodo(nodoId, nodo.getSig()))
                }else{
                    throw new Error('No se encontro el nodo')
                }
            }
        }
    }

    remove(nodoId, nodo = this.root){
        if(this.isEmpty === true){
            throw new Error('La Lista Esta Vacia')
        }else{
            if(nodo.getId() === nodoId){
                if(nodo.getSig() !== null){
                    this.root = nodo.getSig()
                }else{
                    this.root = null
                }
            }else if(nodo.getSig() !== null){
                if(nodoId === nodo.getSig().getId()){
                    let temp = nodo.getSig()
                    if(temp.getSig() !== null){
                        nodo.setSig(temp.getSig())
                    }else{
                        nodo.setSig(null)
                    }
                }else{
                    this.remove(nodoId, nodo.getSig())
                }
            }else{
                throw new Error('No se encontro el nodo')
            }
            
        }
    }
    
    getNodoNombre(nombre, nodo = this.root){
        if(this.isEmpty() === true){
            throw new Error ('Lista Vacia')
        }else{
            if(nodo.getContent().getNombre() === nombre){
                return(nodo)
            }else{
                if(nodo.getSig() !== null){
                    return(this.getNodoNombre(nombre, nodo.getSig()))
                }else{
                    throw new Error('No se encontro el nodo')
                }
            }
        }
    }

    getNodos(nodo = this.root, array = []){
        if(this.isEmpty() === true){
            throw new Error('Lista Vacia')
        }else{
            array.push(nodo)
            if(nodo.getSig() !== null){
                return(this.getNodos(nodo.getSig(), array))
            }else{
                return(array)
            }
        }
    }
}