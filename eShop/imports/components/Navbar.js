import React, { Fragment } from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'

function Navbar({user}){
    return(
        <Menu>
            {user && user.profile.cart && user.profile.cart.length > 0 &&
                <Menu.Item>{user.profile.cart.length} product(s)</Menu.Item>
            }
            <Link to ="/admin/users"> 
                <Menu.Item>Users</Menu.Item>
            </Link>
            {Meteor.userId() ?
            <Fragment>
            <Link to ="/my_products"> 
                <Menu.Item>My products</Menu.Item>
            </Link>
            <Link to ="/new_product"> 
                <Menu.Item>Create a new product</Menu.Item>
            </Link>
            <Menu.Item onClick={Meteor.logout}>Disconnect</Menu.Item>
            </Fragment>
            :
            <Link to ="/login"> 
                <Menu.Item>Connexion</Menu.Item>
            </Link>
            }
        </Menu>
    )
}

export default withTracker(()=>{
    return {
        user: Meteor.user()
    }
})(Navbar)