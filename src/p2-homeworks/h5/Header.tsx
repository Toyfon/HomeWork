import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div>
            <nav>
           <Link to= '/pre-junior'>PreJunior</Link>
           <Link to='/junior'>Junior</Link>
           <Link to='/junior-plus'>Junior-plus</Link>
            </nav>
        </div>
    )
}

export default Header
