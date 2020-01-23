import React from 'react'
import {Form, Button, Container} from 'semantic-ui-react'

function Signup(props){
    return(
        <Container>
            <h1>Sign Up for FREE !</h1>
            <Form>
                <Form.Input label="Your e-mail" required type="email" placeholder="example@mail.com" />
                <Form.Input label="Your password" required type="password" placeholder="password" />
                <Button color="orange">Sign Up</Button>
            </Form>
        </Container>
    )
}

export default Signup