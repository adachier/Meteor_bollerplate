import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'

function MyProducts(props){
    return(
        <Container>
            <h1>My Products</h1>
            <Link to ="/new_product">
                <Button color ="orange" icon="plus" content="Ajouter un produit" />
            </Link>
        </Container>
    )
}

export default MyProducts