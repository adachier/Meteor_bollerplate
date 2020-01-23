import React, {useState} from 'react'
import {Form, Button, Container} from 'semantic-ui-react'
import {Accounts} from 'meteor/accounts-base'
import {Link} from 'react-router-dom'


function Signin(props){
    const [email, setEmail]                     =useState()
    const [password, setPassword]               =useState()

    const signin=()=>{
        Meteor.loginWithPassword(email, password)
    }
    return(
        <Container>
            <h1>Sign In</h1>
            <Form onSubmit={signin}>
                <Form.Input value ={email} onChange={(e, {value}) => setEmail(value)} label="Your e-mail" required type="email" placeholder="example@mail.com" />
                <Form.Input value ={password} onChange={(e, {value}) => setPassword(value)} label="Your password" required type="password" placeholder="password" />
                <Button disabled={!email || !password} color="orange">Sign In</Button>
                <Link to="/signup">
                    <Button size="mini">Create an account</Button>
                </Link>
            </Form>
        </Container>
    )
}

export default Signin