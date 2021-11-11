import React from 'react'
import Header from './Header'

import {HashRouter} from "react-router-dom";
import RoutesPage from "./RoutesPage";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}

            <HashRouter>

                <Header/>
            <RoutesPage/>

            </HashRouter>
        </div>
    )
}

export default HW5
