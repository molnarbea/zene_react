import {type ZeneTipus } from "../adat"

interface ZeneProps{
    zenem: ZeneTipus
}
import './Zene.css'

export default function Zene({zenem}:ZeneProps){
    return(
        <>
            <div className="zene">
            <h2>{zenem.cim}</h2>
            <p><span>Előadó: </span>{zenem.enekes}</p>
            <p><span>Megjelenési év: </span>{zenem.kiadasiEv}</p>
            <img className="ZeneKep" src={zenem.kep} alt={zenem.enekes} />
            <button>Kiválaszt</button>
        </div>
        </>
    )
}