import React from 'react'
import MainLayout from '/imports/routers/MainLayout'
import {
    BrowserRouter,
    Switch,
    Route
}from 'react-router-dom'
import Navbar from '../components/Navbar'

function App(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" component={MainLayout}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App