// Standard Routes

import React from 'react'
import {
    Switch,
    Route
}from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'
import Catalog from './pages/Catalog'

// Admin Routes

import AdminUsers from './pages/admin/AdminUsers'
import MyProducts from './pages/MyProducts'
import NewProduct from './pages/NewProduct'

function MainLayout(props){
    return(
        <Switch>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/admin/users" exact component={AdminUsers}/>
            <Route path="/login" exact component={Signin}/>
            <Route path="/my_products" exact component={MyProducts}/>
            <Route path="/catalog/:user_id" exact component={Catalog}/>
            <Route path="/new_product" exact component={NewProduct}/>
            <Route path="*" exact component={NotFound}/>
            <Route path="/" exact component={Landing}/>
        </Switch>
    )
}

export default MainLayout