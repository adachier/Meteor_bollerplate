import React, { Fragment } from 'react'
import {Card, Button} from 'semantic-ui-react'

function Product({product, ...props}){
    const remove = ()=>{
        Meteor.call('products.remove', product._id)
    }
    return(
        <Card 
        header={product.name} 
        description={product.description}
        meta={product.meta}
        image={product.image_url}
        extra={
            <Fragment>
                <Button fluid>Buy</Button>
                {product.seller == Meteor.userId() &&
                <Fragment>
                    <Button fluid color="orange">Edit</Button>
                    <Button fluid onClick={remove} color="red">Delete</Button>
                </Fragment>
                }
            </Fragment>
        }
        />
    )
}

export default Product