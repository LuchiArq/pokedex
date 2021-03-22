import React,{useState} from 'react'
import './searchBar.css'
import {usePokemonData} from '../../hooks/usePokemonData'

export default function SearchBar() {


    const [pokemon,setPokemon] = useState()
    const {searchPokemon} = usePokemonData()

    const HandleOnChange= (e) =>{
        setPokemon(e.target.value)
    }
    const Submit = (e) =>{
        e.preventDefault()
        searchPokemon(pokemon)
        setPokemon("")
    }

    return (
        <>
            <form className="SearchBar" onSubmit={Submit}>
                <input onChange={HandleOnChange} value={pokemon} 
                type="text" 
                placeholder={localStorage.language==="en"?"Name - ID": "Nombre - ID"}/>
                <button >{localStorage.language==="en"?"Search": "Buscar"}</button>
            </form>
        </>
    )
}
