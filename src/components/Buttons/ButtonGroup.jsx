import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as IconHome } from '../../assets/home.svg';
import './button.css'

export default function ButtonGroup() {

    const changeLangueage = ()=>{
        if(localStorage.language === "es"){
            localStorage.setItem("language","en")
            return window.location.reload()
        }
        if(localStorage.language === "en"){
            localStorage.setItem("language","es")
            return window.location.reload()
        } 
    }

    return (
        <div className="buttonGroup">
            <Link to={"/"}>
                <div className="buttonFloat">
                    <IconHome className="icon text"/>    
                </div>
            </Link>
            <div onClick={changeLangueage} className="buttonFloat">
                <span className="text">{localStorage.language==="es"?"En":"Es"}</span>    
            </div>
        </div>
    )
}
