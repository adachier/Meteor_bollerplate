import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'
import { withTracker } from 'meteor/react-meteor-data'
import Products from '/imports/api/products/products'
import Product from  '/imports/components/Product'

function MyProducts(props){
    return(
        <Container>
            <h1>My Products</h1>
            <Link to ="/new_product">
                <Button color ="orange" icon="plus" content="Add a new product" />
            </Link>
            {!props.loading && props.products.map(product =>{
                return <Product key={product._id} product={product}/>
            })}
        </Container>
    )
}

export default withTracker(()=>{
    const products_pub = Meteor.subscribe('products.me')
    const loading = !products_pub.ready()
    const products = Products.find({seller: Meteor.userId()}).fetch()

    return{
        loading,
        products
    }
})(MyProducts)