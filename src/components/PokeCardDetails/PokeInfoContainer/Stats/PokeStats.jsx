import React from 'react'
import ProgressBar from './ProgressBar'
import './pokeStats.css'

export default function PokeStats({data}) {
console.log("DATOOOOOS ",data)


    return (
        <div className="pokeStats-container">
            {
               data && data.map(stat=>{
                    return <ProgressBar name={stat.name} value={stat.value}/>
                })
            }
        </div>
    )
}
