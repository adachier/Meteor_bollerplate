import SimpleSchema from 'simpl-schema'

const products = new Mongo.Collection('products')
const ProductsSchema = new SimpleSchema({
    name: {
        type: String,
    },
    price: {
        type: Number
    },
    description: {
        type: String,
        defaultValue: "Un produit"
    },
    seller: {
        type: String
    },
    stock: {
        type: Number,
        defaultValue: 0
    },
    stock: {
        type: Number,
        defaultValue: 0
    },
    image_url: {
        type: String,
        defaultValue: "https://guitar.com/wp-content/uploads/2019/10/lava-music-lava-me-pro@1400x1050.jpg"
    },
    category: {
        type: String
    },
    created_at: {
        type: Date,
        defaultValue: new Date()
    }
})

Products.attachSchema(ProductsSchema)