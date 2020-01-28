import React, { useState } from 'react'
import { Container, Form, Button } from 'semantic-ui-react'
import ProductForm from '/imports/components/ProductForm'

function NewProduct(props){

    return(
        <Container>
            <h1>Create a product</h1>
            <ProductForm />
        </Container>
    )
}

export default NewProduct