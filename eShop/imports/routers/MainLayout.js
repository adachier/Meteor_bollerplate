import React from 'react'
import {
    Switch,
    Route
}from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'
import AdminUsers from './pages/admin/AdminUsers'

function MainLayout(props){
    return(
        <Switch>
            <Route path="/signup" component={Signup}/>
            <Route path="/admin/users" exact component={AdminUsers}/>
            <Route path="/login" exact component={Signin}/>
            <Route path="*" exact component={NotFound}/>
            <Route path="/" exact component={Landing}/>
        </Switch>
    )
}

export default MainLayout