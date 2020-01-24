import React, { useState } from 'react'
import { Container, Form, Button } from 'semantic-ui-react'

function NewProduct(props){
    const [product, setProduct] = useState({})
    return(
        <Container>
            <h1>Create a new product</h1>
            <Form>
                <Form.Input
                    type="text"
                    label="Product's Name"
                    value={product.name}
                    onChange={(e, {value}) => setProduct({...product, name:value})}
                />
                <Form.Input
                    type="number"
                    label="Price"
                    value={product.price}
                    onChange={(e, {value}) => setProduct({...product, price:value})}
                />   
                <Button color="green">Done !</Button>             
            </Form>
        </Container>
    )
}

export default NewProduct