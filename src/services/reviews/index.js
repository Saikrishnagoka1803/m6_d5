import express from "express"
import db from "../../db/models/index.js"

const router = express.Router()
const {Product, Reviews} = db

router
.route("/")
.get(async(req, res, next) => {
    try {
        const data = await Reviews.findAll()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
.post(async(req, res, next) => {
    try {
        const data = await Reviews.create(req.body)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

router
.route("/:id")
.get(async(req, res, next) => {
    try {
        const data = await Reviews.findOne({
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
        const data = await Reviews.update(req.body, {
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
        const rows = await Reviews.destroy({ where: { id: req.params.id } });
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