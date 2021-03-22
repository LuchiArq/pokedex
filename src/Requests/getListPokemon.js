import {getDataCardPokemon} from './getDataCardPokemon.js'

    
  export const  getListPokemon = async (offset,limit,language)=>{
    const URL_LIST = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    const resp = await fetch(URL_LIST);
    const { results } = await resp.json();
    const listName = results.map(poke => poke.name);
    console.log(listName)
    const listPokemon = await Promise.all(
        listName.map(pokeName=> {
          return(
            
            getDataCardPokemon(pokeName==="pidgeot" ? 18: pokeName,language)
            )})
    )
    return listPokemon;
}



