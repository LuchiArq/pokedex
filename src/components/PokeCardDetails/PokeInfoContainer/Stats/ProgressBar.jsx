import React from 'react'


export default function ProgressBar({name,value}) {
    
    const bar = {
        width : 175,
        height : 5,
        background : 'white',
        opacity: '30%',
        borderRadius:2
    }

    const progress ={
        height : 5,
        width: `${value*0.49}%`,
        background :'black',
        borderRadius:2
    }

    return (
        <div className="ProgressBar-container">
            <h3 className="text">{`${name}: `}</h3>
            <div className="ProgressBar">
                <p className="text">{value}</p>
                <div style={bar}>
                    <div style={progress}></div>
                </div>
            </div>
        </div>
    )
}
