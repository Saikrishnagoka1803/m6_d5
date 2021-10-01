import express from "express"
import db from "../../db/models/index.js"
//import Productcategories from "../../db/models/productCategories.js"

const router = express.Router()
const {Product, Reviews, Productcategories, Category} = db

router
.route("/")
.get(async(req, res, next) => {
    try {
        const data = await Productcategories.findAll()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
.post(async(req, res, next) => {
    try {
        const data = await Productcategories.create(req.body)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

router
.route("/:id")
.get(async(req, res, next) => {
    try {
        const data = await Productcategories.findOne({
            where: { id: req.params.id },
            include: Article,
          });
          if (data) {
            res.send(data);
          } else {
            res.status(404).send("Not found");
          }
    } catch (error) {
        console.log(error)
    }
})
.put(async(req, res, next) => {
    try {
        const data = await Productcategories.update(req.body, {
            where: {
              id: req.params.id,
            },
            returning: true,
          });
          res.send(data[1][0]);
    } catch (error) {
        console.log(error)
    }
})
.delete(async(req, res, next) => {
    try {
        const rows = await Productcategories.destroy({ where: { id: req.params.id } });
        if (rows > 0) {
          res.send("Deleted successfully!!");
        } else {
          res.status(404).send("Not found");
        }
    } catch (error) {
        console.log(error)
    }
})

export default router;