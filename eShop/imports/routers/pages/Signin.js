import React, {useState} from 'react'
import {Form, Button, Container} from 'semantic-ui-react'
import {Accounts} from 'meteor/accounts-base'
import {Link} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'


function Signin(props){
    const [email, setEmail]                     =useState()
    const [password, setPassword]               =useState()

    const signin=()=>{
        Meteor.loginWithPassword(email, password)
    }
    const logout=()=>{
        setPassword('')
        Meteor.logout()
    }
    return(
        <Container>
            <h1>Sign In</h1>
            {!props.current_user ?
            <Form onSubmit={signin}>
                <Form.Input value ={email} onChange={(e, {value}) => setEmail(value)} label="Your e-mail" required type="email" placeholder="example@mail.com" />
                <Form.Input value ={password} onChange={(e, {value}) => setPassword(value)} label="Your password" required type="password" placeholder="password" />
                <Button disabled={!email || !password} color="orange">Sign In</Button>
                <Link to="/signup">
                    <Button size="mini">Create an account</Button>
                </Link>
            </Form>
            :
            <div>
                <p>You're already connected with address {props.current_user.emails[0].address}</p>
                    <Button onClick={logout} color="red">Log Out</Button>
            </div>
            }
        </Container>
    )
}

export default withTracker(()=>{
    const current_user =Meteor.user()
    return{
        current_user
    }
}) (Signin)