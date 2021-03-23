import {useState, useEffect} from 'react'
import {getFullDataPokemon} from '../Requests/getFullDataPokemon'
import {useHistory} from 'react-router-dom'

export const  usePokemonData = (NameOrId,language) =>{

    const [pokemon ,setPokemon] = useState(NameOrId)
    const [PokeData, setPokeData] = useState()
    const [Loading,setLoading ] = useState(true)
    const history =  useHistory() 

    const searchPokemon=(pokemon)=>{
        setLoading(true)
        history.push( `/pokemon/${pokemon}`)
        window.location.reload()
        getFullDataPokemon(pokemon,language)
        .then(resp=>{
            setPokeData(resp)
            setLoading(false)
        })
    }
    const PreviousPokemon = () =>{
        if(PokeData.status || PokeData.id == 1) return
        
        setLoading(true)
        if(PokeData.id==1) return
        getFullDataPokemon(PokeData.id-1,language)
        .then(resp=>{
            setPokemon(resp.name)
            setPokeData(resp)
            history.push(resp.name)
        })
    }

    const NextPokemon = () =>{
        if(PokeData.status || PokeData.id == 898) return
        setLoading(true)
        getFullDataPokemon(PokeData.id+1,language)
        .then(resp=>{
            setPokemon(resp.name)
            setPokeData(resp)
            history.push(resp.name)
        })
    }

    useEffect(() => {
        setLoading(true)
        getFullDataPokemon(pokemon,language)
        .then(resp=>{
            setPokeData(resp)
            setLoading(false)
        })
    }, [pokemon])

    return {PokeData,PreviousPokemon,NextPokemon,searchPokemon,Loading}
}
