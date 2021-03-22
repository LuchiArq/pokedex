import React from 'react'
import {Link} from 'react-router-dom'
import ButtonGroup from '../components/Buttons/ButtonGroup'
import SearchBar from '../components/SearchBar/SearchBar'
import './layout.css'

export default function Layout({children}) {
    
    return (
        <div className="layout">
            <Link className="layout-img-link" to={'/'}>
                <img className="layout-img-logo" src={require('../assets/logo-pokemon.png').default}></img>
            </Link>
            <div className="layout-NavBar">
                    <SearchBar/>
                    <ButtonGroup/>
            </div>
            {children}
        </div>
    )
}
