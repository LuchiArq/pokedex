 //obtiene la cadena de evolucion de un pokemon
 export const getEvolutionChain = async (url) =>{
    const  resp = await fetch(url)
      const {chain} = await resp.json()
      return evolutionChain(chain)
  }
  
  const evolutionChain = (obj,key="evolves_to",pokemons=[]) =>{
     const imgUrl ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
     
     if(Array.isArray(obj[key]) && obj[key].length===0){
         pokemons.push({ name:obj.species.name[0].toUpperCase() + obj.species.name.slice(1),
                         image:`${imgUrl}${(obj.species.url).split("/")[6]}.png`})
         return pokemons
     }
     pokemons.push({ name:obj.species.name[0].toUpperCase() + obj.species.name.slice(1),
                     image:`${imgUrl}${(obj.species.url).split("/")[6]}.png`})
                     
     return evolutionChain(obj[key][0],key,pokemons)
 } 