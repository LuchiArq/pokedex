import React from 'react'
import Card from '../PokemonCard/Card'
import useListPokemon from '../../hooks/useListPokemon';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import ButtonChangePage from '../Buttons/ButtonChangePage'
import {useHistory} from 'react-router-dom'
import { motion} from "framer-motion"
import './pokemonList.css'

export default function PokemonList() {

    
const history = useHistory()
const PageDetails = (NameOrID) => { history.push(`pokemon/${NameOrID.toLowerCase()}`) }
const {PokeList,nextPage,PreviousPage,Loading} = useListPokemon(`${localStorage.language}`)

    return (
        <div className="pokeList-container">
            <div className="pokeList-buttons-changePage" >
                <ButtonChangePage  ButtonType="previous" onClick={PreviousPage}/>
                <ButtonChangePage ButtonType="next" onClick={nextPage}/>
            </div>
            <div  className="pokeList">
                    { 
                    Loading ?
                        <LoadingSpinner/>
                    :
                    PokeList.map((pokeData,index) =>{
                        return(
                            <motion.div
                                animate="visible"
                                key={pokeData.name}
                                custom={index}
                                initial="hidden"
                                variants={{
                                    hidden: { opacity: 0, x:-30 },
                                    visible: (index) => ({
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: index * 0.08,
                                    },
                                    }),
                                }}>

                                    <Card  PokeInfo={()=>{PageDetails(pokeData.name)}}
                                            key={pokeData.id} 
                                            data={pokeData}/>
                            </motion.div>
                        )
                                
                            })
                    }

            </div>
        </div>
    )
}
