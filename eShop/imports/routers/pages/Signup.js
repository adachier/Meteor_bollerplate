import React, {useState} from 'react'
import {Form, Button, Container} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {Accounts} from 'meteor/accounts-base'

function Signup(props){
    const [email, setEmail]                     =useState()
    const [password, setPassword]               =useState()

    const signup = () => {
        Accounts.createUser({
            email,
            password,
        },(err)=>{
            if(err){
                alert(err.message)
            }else{
                console.log('User created')
            }
        })
    }

    return(
        <Container>
            <h1>Sign Up for FREE !</h1>
            <Form onSubmit={signup}>
                <Form.Input value ={email} onChange={(e, {value}) => setEmail(value)} label="Your e-mail" required type="email" placeholder="example@mail.com" />
                <Form.Input value ={password} onChange={(e, {value}) => setPassword(value)} label="Your password" required type="password" placeholder="password" />
                <Button disabled={!email || !password} color="orange">Sign Up</Button>
                <Link to="/login">
                    <Button size="mini">Already got an account ?</Button>
                </Link>
            </Form>
        </Container>
    )
}

export default Signup