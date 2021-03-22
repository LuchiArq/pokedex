import React,{useState} from 'react'
import PokeStats from './Stats/PokeStats'
import PokeGeneralInfo from './GeneralData/PokeGeneralData'
import PokeAbilities from './Abilities/PokeAbilities'
import './pokeInfoContainer.css'

export default function PokeDetails({data}) {
    const [tag , setTag] = useState("General")

    if(!data){
        return(
            <div className="error">
                <h2 className="text">Sin datos</h2>
            </div>
        )
    }

    const {AllStats,abilitiesInfo,description,evolution,habitat,height,weight} = data

    return (
        <div className="data-container">
            <div className="data-container-header">
                <button onClick={()=>{setTag("General")}} 
                        className={`${tag=="General" && "Button-active"}`}>General</button>

                <button onClick={()=>{setTag("Stats")}} 
                        className={`${tag=="Stats" && "Button-active"}`}>{localStorage.language==="en"?"Stats":"Estadist."}</button>

                <button onClick={()=>{setTag("Abilities")}}
                        className={`${tag=="Abilities" && "Button-active"}`}>{localStorage.language==="en"?"Abilities":"Habilid."}</button>
            </div>
            
            <div className="data-container-info">
                {tag==="General" && <PokeGeneralInfo data={{description,evolution,habitat,height,weight}}/>}
                {tag==="Stats" && <PokeStats data={AllStats}/>}
                {tag==="Abilities" && <PokeAbilities data={abilitiesInfo}/>}
            </div>
        </div>
    )
}
