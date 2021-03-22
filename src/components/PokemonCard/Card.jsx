import React from 'react'
import {SelectType} from '../../hooks/SelectType'
import PokemonType from './PokemonType/PokemonType'
import '../../assets/colorType.css'
import './card.css'

export default function Card({data,PokeInfo,active}) {

const {name,AllStats,id,image,typePrimary,typeSecundary} = data === null ?{ name:"Pokemon no encontrado",
                                                                            AllStats:["--","--","--"],
                                                                            id:"0",
                                                                            image:"",
                                                                            typePrimary:"",
                                                                            typeSecundary:""} : data
   const [hp,defense,attack] = AllStats 
    return (
                <div onClick={()=>{PokeInfo && PokeInfo()}} className={`${active && "active"} pokeCard`}>
                    <h2 className="text pokeCard-name">{name}</h2>
                        <div  className={`pokeCard-image-container`}>
                            <img className="pokeCard-image" src={image}/>
                        </div>

                        <div className={`pokeCard-stat-container`}>
                            <div className="text pokeCard-stat">
                                <span>{ hp && hp.name}</span>
                                <p>{  hp && hp.value}</p>
                            </div>
                            <div className="text pokeCard-stat">
                                <span>{ attack && attack.name}</span>
                                <p>{ attack &&  attack.value}</p>
                            </div>
                            <div className="text pokeCard-stat">
                                <span>{defense &&  defense.name}</span>
                                <p>{defense &&  defense.value}</p>
                            </div>

                        </div>

                        <div className={`type-container`}>
                             <PokemonType className="type-image" type={typePrimary}/>
                            { typeSecundary && <PokemonType className="type-image" type={typeSecundary}/>}  
                        </div>

                        <div className={`Id-container`}>
                            <p>{`#${id}`}</p>
                        </div>
                         <div className={`${active && "active-background"} colorType ${SelectType(typePrimary)}  ${SelectType(typePrimary)}-shadow`}></div> 
                </div>
        
    )
}
