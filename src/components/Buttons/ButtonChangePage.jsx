import React from 'react'
import { ReactComponent as ArrowLeft } from '../../assets/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg';

import './button.css'
export default function ButtonChangePage({children,ButtonType,onClick}) {
    return (
        <button onClick={onClick} className={`buttonFloat ${ButtonType}`}>
            {
                ButtonType === "next" ? <ArrowRight className="icon"/>
                                      : <ArrowLeft className="icon"/>
            }
        </button>
    )
}
