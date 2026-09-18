import type { ZeneTipus } from "../adat"
import Zene from "./Zene"

interface ListaProps{
    lista:ZeneTipus[]
}

export default function Zenek({lista}:ListaProps){
    return(
        <>
        {
            lista.map((e,i)=>{
                return <Zene zenem = {e} key={i} />
            })
        }
        </>
    )
}