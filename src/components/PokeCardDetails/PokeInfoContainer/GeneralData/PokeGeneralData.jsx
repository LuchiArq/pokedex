import React from 'react'
import EvolutionChain from './EvolutionChain'
import './pokeGeneralData.css'

export default function PokeGeneralData({data}) {
    console.log(data)

    const {description,evolution,habitat,height,weight} = data

    return (
        <div className="GeneralData">
            <div className="GeneralInfo-weight_height">
                <h4 className="text">{`${weight.name}: ${weight.value}Kg`}</h4>
                <h4 className="text">{`${height.name}: ${height.value}m`}</h4>
            </div>
            <div className="GeneralInfo-description">
                <p className="text">
                    {description[0].flavor_text}
                </p>
            </div>
            <div className="GeneralInfo-habitat">
                <h4 className="text" >Habitat: {!habitat ? "----" : habitat}</h4>
            </div>
            <div className="GeneralInfo-evolution">
                <h4 className="text" >{localStorage.language==="en"?"Evolution chain:":"Cadena de evolución"}</h4>
                <EvolutionChain evolution={evolution}/>
            </div>
        </div>
    )
}
