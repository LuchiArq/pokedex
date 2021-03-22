export const getTypes = async (url,language) => {
    const  resp = await fetch(url)
    const {names} = await resp.json()
    const typeName = names.filter(name => name.language.name === language)[0]
    return typeName && typeName.name
}