import React from 'react'
import {
    Switch,
    Route
}from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'

function MainLayout(props){
    return(
        <Switch>
            <Route path="/signup" component={Signup}/>
            <Route path="/" exact component={Landing}/>
            <Route path="*" exact component={NotFound}/>
        </Switch>
    )
}

export default MainLayout