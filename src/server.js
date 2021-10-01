import express from "express";
import cors from "cors";
import { connection } from "./db/index.js";
// import Product from "./db/models/products.js";
// import Reviews from "./db/models/reviews.js";
//import db from "./db/models/index.js"
import productsrouter from "./services/products/index.js"
import reviewsrouter from "./services/reviews/index.js"
import categoriesrouter from "./services/category/index.js"
import Productcategoriesrouter from "./services/productcategoroes/index.js";
import cartrouter from "./services/Cart/index.js"
import usersrouter from "./services/users/index.js"

const {port = 5000} = process.env
const server = express()

server.use(express.json())
server.use(cors())

server.use("/products", productsrouter)
server.use("/reviews", reviewsrouter)
server.use("/categories", categoriesrouter)
server.use("/productcategories", Productcategoriesrouter)
server.use("/cart", cartrouter)
server.use("/users", usersrouter)

server.listen(port, async() => {
    console.log(`server running on port ${port}`)
    await connection()
})

server.on("error", (error) => {
    console.log("server has trouble starting", error)
})