import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'semantic-ui-react'


function ProductForm(props){
    const [product, setProduct] = useState({})

useEffect(()=>{
    setProduct(props.product || {})
}, [props])


    const submit = () => {
        if (props.product){
            // Update product
                Meteor.call('products.update', product, (err, data)=>{
                    if(err){
                        alert(err.message)
                    }else{
                        alert('Your product has been modified')
                        console.log(data)
                    }
                })
        }else{
            // Create product
                Meteor.call('products.create', product, (err, data)=>{
                    if(err){
                        alert(err.message)
                    }else{
                        alert('Your product has been created')
                        console.log(data)
                    }
                })
            }
        }
    
    return(

        <Form onSubmit={submit}>
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

    )
}

export default ProductForm