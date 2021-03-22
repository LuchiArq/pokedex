import React from 'react'
import { ReactComponent as ArrowNext } from '../../../../assets/arrowNext.svg';
import {usePokemonData} from '../../../../hooks/usePokemonData'

import './evolutionChain.css'

export default function EvolutionChain({evolution}) {
    const {searchPokemon} = usePokemonData()

    return (
        <div className="evolutionChain">
            {   evolution.length ?
                evolution.map((elem,index)=>{
                    return(
                        <>
                        
                        <div onClick={()=>{searchPokemon(elem.name)}} className="evolutionChain-card">
                            <p className="text evolutionChain-card-name">{elem.name}</p>
                            <img className="evolutionChain-card-image" src={elem.image}></img>
                        </div>
                             {evolution.length-1 == index ? "" : <ArrowNext className="evolutionChain-icon"/>}
                        </>
                    )
                })
                :null
            }
        </div>
    )
}
