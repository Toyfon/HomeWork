import React from 'react'
import s from "../../h5/pages/Error.module.css";
import {NavLink} from "react-router-dom";

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
            <h1>404</h1>
            <h4>Page not found!</h4>
            <div><NavLink to='/pre-junior' className={s.link}>Перейти в начало</NavLink></div>
            </div>
        </div>
    )
}

export default Error404
