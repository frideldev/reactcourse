import { useEffect, useState } from "react"
import {params as Cardparams} from '../components/Cards'
import { emiter, emittedData } from "../events/selected";
export type FunctionSelect =()=> {
    data: Cardparams[]
};
const useSelect:FunctionSelect = ()=>{
    const [view,setView]=useState<string>()
    const [data,setData]=useState<Cardparams[]>([])
  useEffect(()=>{
    const generateData=():Cardparams[]=>{
      const raw:Cardparams[]=[
        {id:"",image:"/vite.svg",title:"Integraciones",description:"conecta Slack Gmail Outlook y otras herramientas",isVisible:false},
        {id:"",image:"/vite.svg",title:"Integraciones a",description:"conecta Slack Gmail Outlook y otras herramientas",isVisible:false},
        {id:"",image:"/vite.svg",title:"Integraciones b",description:"conecta Slack Gmail Outlook y otras herramientas",isVisible:false}
      ].map(v=>({...v,isVisible:view===v.title}))
    return raw
    }
    const result=generateData()
    setData(result)
    emiter.on('click',(id:string)=>{
      const result:Cardparams[]=generateData()
      setData(result)
      setView(id)
      emittedData(generateData())
     
    })
   
    return ()=>{
      emiter.removeListener('click')
    }
  },[view])
  
  return{data}
}
export default useSelect