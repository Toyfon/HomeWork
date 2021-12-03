import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {


    return (
        <div className={s.nav}>
            <div className={s.block}>Level</div>
            <div className={s.spacer}/>
            <NavLink to='/pre-junior'
                     style={({ isActive }) => ({ color: isActive ? 'lightblue' : 'lightslategrey' })}
                     className={s.link}>PreJunior</NavLink>
            <NavLink to='/junior'
                     style={({ isActive }) => ({ color: isActive ? 'lightblue' : 'lightslategrey' })}
                     className={s.link}>Junior</NavLink>
            <NavLink to='/junior-plus'
                     style={({ isActive }) => ({ color: isActive ? 'lightblue' : 'lightslategrey' })}
                     className={s.link} >Junior+</NavLink>

        </div>
    )
}

export default Header
