export const getAbilities = async (url,language="en") =>{
    
    const  resp = await fetch(url)
    const { names, flavor_text_entries} = await resp.json()

    
    const {name} = names.filter(name=>name.language.name===language)[0]
    const {flavor_text} =  flavor_text_entries.filter(eff=>eff.language.name===language).length 
                        ? flavor_text_entries.filter(eff=>eff.language.name===language)[0] 
                        : flavor_text_entries.filter(eff=>eff.language.name==="en")[0]
    return {
        flavor_text,
        name,

    }
}