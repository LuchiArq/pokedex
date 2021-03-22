import {getEvolutionChain} from './GetEvolutionChain'

export const getSpecieInfo = async (url,language="en") => {
    const resp = await fetch(url)
     const {
         flavor_text_entries:description,
         evolution_chain,
         habitat
     } = await resp.json()
     
     const habitatNames = habitat && await getHabitat(habitat.url,language)

     const evolution = await getEvolutionChain(evolution_chain.url)
     const desc = description.filter(desc=>  desc.language.name===language).length ? description.filter(desc=>  desc.language.name===language) : description.filter(desc=>  desc.language.name==="en")

     return {
         description : desc.filter(desc=> desc.version.name === "ruby" || desc.version.name === "omega-ruby" || desc.version.name === "shield"),
         evolution,
         habitat: habitatNames
     }
 }
 
const  getHabitat = async (url,language) =>{
    const respHabitat = await fetch(url)
    const {names : habitatNames} = await respHabitat.json()
    return habitatNames.filter(habit => habit.language.name === language)[0].name
}