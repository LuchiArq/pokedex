 import React from 'react'
 import {SelectType} from '../../../hooks/SelectType'
import './pokemonType.css'

export default function PokemonType({type}) {
    if(!type){
        return(null)
    }
    const PokeType = SelectType(type)
    const image = PokeType && require(`../../../assets/ImageTypes/${PokeType}.png`).default
    return (
        <div className="pokemonType-container">
            <img className="imagetype" src={image} alt=""/>
            <p className ="textType">{type}</p>
        </div>
    )
}
 