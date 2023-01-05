import EventEmitter from "eventemitter3";
import {params as Cardparams} from '../components/Cards'
export const emiter: EventEmitter<string | symbol, any> = new EventEmitter()
export const emittedId=(id:string)=> emiter.emit('click',id)
export const emittedData=(data:Cardparams[])=>emiter.emit('data',data)