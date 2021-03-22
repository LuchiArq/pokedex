import React from 'react'
import PokeCard from '../PokemonCard/Card'
import PokeInfoContainer from './PokeInfoContainer/PokeInfoContainer'
import ButtonChangePage from '../Buttons/ButtonChangePage'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import {usePokemonData} from '../../hooks/usePokemonData'
import {SelectType} from '../../hooks/SelectType'
import './pokeCardDetails.css'

export default function PokeCardDetails({match}) {
    
    const {NameOrID} = match.params

    const {PokeData,PreviousPokemon,NextPokemon,Loading} = usePokemonData(NameOrID,`${localStorage.language}`)

    return (
        <div class="PokemonPage-container">
            <div  className="PokemonPage-container-buttons">
                <ButtonChangePage ButtonType="previous" onClick={PreviousPokemon}/>
                <ButtonChangePage ButtonType="next" onClick={NextPokemon}/>
            </div>
            <div className="PokemonPage-container-content">
                {
                    Loading ?
                    <LoadingSpinner/>
                    :
                        <div className="PokeCardDetails-container">
                            <div className={`PokeCardDetails-Card ${SelectType(PokeData.typePrimary)}-shadow`}>
                                <PokeCard active={true} data={PokeData.status===404 ? null :PokeData}/>  
                            </div>
                            <div className="PokeCardDetails-Data">
                                <div className="PokeCardDetails-Data-container">
                                    <PokeInfoContainer data={PokeData.status===404 ? null :PokeData}/>
                                </div>
                            </div>
                        </div> 
                }
            </div>
        </div>

    )
}
