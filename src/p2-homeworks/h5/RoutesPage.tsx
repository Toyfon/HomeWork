import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import JuniorPlus from "./pages/Junior+";
import Junior from "./pages/Junior";
import s from './Header.module.css'



export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    ERROR: '/error404'
    // add paths
}

function RoutesPage() {
    return (
        <div >
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={'*'} element={<Navigate to={PATH.ERROR}/>}/>
                <Route path={PATH.ERROR} element={<Error404/>}/>
            </Routes>

        </div>

    )
}

export default RoutesPage
