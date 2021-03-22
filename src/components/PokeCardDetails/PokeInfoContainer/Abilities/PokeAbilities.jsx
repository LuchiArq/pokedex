import React from 'react'

export default function PokeAbilities({data}) {
    console.log("DATOS DE HABILIDADES",data)

    const abilities_container ={
        height:'100%',
        display: 'flex',
        alignItems:'flexStart',
        flexDirection: 'column'
    }

    const ability_style = {
        margin:'1rem'
    }

    return (
        <div style={abilities_container}>
            {
                data.map(ability =>{
                    return(
                        <div style={ability_style}>
                            <h3 className="text">{ability.name}:</h3>
                            <p className="text">{ability.flavor_text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
