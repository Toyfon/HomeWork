import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {


    return (
        <div className={s.nav}>

            <NavLink to='/pre-junior' className={s.link}>PreJunior</NavLink>
            <NavLink to='/junior' className={s.link}>Junior</NavLink>
            <NavLink to='/junior-plus' className={s.link} >Junior+</NavLink>
            <div className={s.block}/>

        </div>
    )
}

export default Header
