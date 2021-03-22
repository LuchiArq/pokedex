import {getSpecieInfo} from './GetSpecieInfo'
import {getTypes} from './GetTypes'
import {getAbilities} from './GetAbilities'

export const getFullDataPokemon = async (idOrName,language)=>{
    const error = {message:"Pokemon no encontrado",
    status:404}

    if(!idOrName)return error
    const poke = idOrName.toString().toLowerCase()
//-----------CONSULTA----------------------------------
    const URL_POKEMON =`https://pokeapi.co/api/v2/pokemon/${poke}/`
    const resp = await fetch(URL_POKEMON)
    if(resp.status === 404) return error
    const {abilities,height,name,sprites,stats,types,weight,species,id} = await resp.json()
//-----------------------------------------------------

//--------------------------NORMALIZADO DE DATOS ---------------
        //SPECIE
    const specieInfo = await getSpecieInfo(species.url,language)
        //ABILITIES
    const abilitiesInfo = await Promise.all(
        abilities.map(abilities=>getAbilities(abilities.ability.url,language))
    ) 
        //IMAGE
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        //TYPES
    const [typePrimary,typeSecundary] =  await Promise.all(
        types.map(types=> getTypes(types.type.url,language)))
        //STATS
    const [hp,attack,defense,special_attack,special_defense,speed] = stats.map(stats=> stats.base_stat)
 //---------------------------------------------------------------------------------------

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
    },
    {
        name: language === "en" ? "Spec. Defense" : "Defensa Esp.",
        value:special_attack
    },
    {
        name: language === "en" ? "Spec. Attack" : "Ataque Esp.",
        value:special_defense
    },
    {
        name: language === "en" ? "Speed" : "Velocidad",
        value:speed
    }]

    return {
            ...specieInfo,
            id,
            image,
            abilitiesInfo,
            height:{name:language==="en" ? "Height":"Altura", value:height/10},
            name : name[0].toUpperCase() + name.slice(1),
            sprites,
            AllStats,
            typePrimary,
            typeSecundary,
            weight:{name:language==="en" ? "Weight":"Peso", value:(weight*0.453592).toFixed(1)}
        }
  
}

//Noramlizando datos de los stat en un objeto con nombre y valor


