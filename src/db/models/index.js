import Product from "./products.js"
import Reviews from "./reviews.js"
import Category from "./category.js"
import User from "./user.js"
import Productcategories from "./productCategories.js"
import Cart from "./cart.js"

Product.hasMany(Reviews)
Reviews.belongsTo(Product)

// Category.belongsToMany(Product, {through: "Productcategories"})
// Product.belongsToMany(Category, {through: "Productcategories"} )


Product.belongsToMany(Category, {through: {model: Productcategories, unique: false}})
Category.belongsToMany(Product, {through: {model: Productcategories, unique: false}})

Product.belongsToMany(User, {through: {model: Cart, unique: false}})
User.belongsToMany(Product, {through: {model: Cart, unique: false}})



export default {Product, Reviews, Category, Productcategories, User, Cart};