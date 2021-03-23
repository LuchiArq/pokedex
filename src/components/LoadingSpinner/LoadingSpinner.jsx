import React from 'react'
import './loadingSpinner.css'
export default function LoadingSpinner() {
    const pokeLoading = require('../../assets/PokeLoading.gif').default

    return (
        <div className="LoadingSpinner-container">
            <div  className="LoadingSpinner-image-container">
                <img className="LoadingSpinner-image" src={pokeLoading} alt=""/>
            </div>
            <h2 className="LoadingSpinner-text">{localStorage.language === "en" ? "Loading" : "Cargando"}</h2>
        </div>
    )
}
