import {getTypes} from './GetTypes'

export const getDataCardPokemon = async (idOrName,language)=>{
    const poke = idOrName.toString().toLowerCase()
    const URL_POKEMON =`https://pokeapi.co/api/v2/pokemon/${poke}`
    const resp = await fetch(URL_POKEMON)
    const {name,stats,types,id} = await resp.json()
    
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
   
    const [typePrimary,typeSecundary] =  await Promise.all(
        types.map(types=> getTypes(types.type.url,language)))
        
    const [hp,attack,defense] = stats.map(stats=> stats.base_stat)

    const AllStats = [
        {
            name: language === "en" ? "Hp" : "PS",
            value:hp
        },
        {
            name: language === "en" ? "Attack" : "Ataque",
            value:attack
        },
        {
            name: language === "en" ? "Defense" : "Defensa",
            value:defense
        }
    ]
    return {
            id,
            image,
            name : name[0].toUpperCase() + name.slice(1),
            AllStats,
            typePrimary,
            typeSecundary
        }
}

 



