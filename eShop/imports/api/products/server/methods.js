import {Meteor} from 'meteor/meteor'
import Products from '/imports/api/products/products'
import Product from '../../../components/Product'

Meteor.methods({
    'products.create': function(product){
        if(!this.userId){
            throw new Meteor.Error('402', "You're not supposed to be here !")
        }
        product.seller=this.userId
        const product_id = Products.insert(product)
        return Products.findOne({_id: product_id})
    },
    'products.remove': function(product_id){
        if(!this.userId){
            throw new Meteor.Error('402', "At least, you tried")
        }
        Products.remove({seller: this.userId, _id:product_id})
        return true
    },
    'products.update': function(product){
        if(!this.userId){
            throw new Meteor.Error('402', "Are you still trying ? ")
        }
        const found_product = Products.findOne({_id: product._id, seller: this.userId})
        if(!found_product){
            throw new Meteor.Error('404', "Your product hasn't been found")          
        }
        Products.update({_id: product._id}, {$set: product})
        return Products.findOne({_id: product._id})
    }, 
    'products.by_id': function(product_id){
        return Products.findOne({_id: product_id, seller: this.userId})
    }
})