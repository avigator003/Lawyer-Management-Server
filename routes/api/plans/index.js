const router = require('express').Router()
const controller = require('./plans.controller')


router.post("/createlist", controller.createList)
router.get("/deletelist/:id", controller.deleteList)
router.get("/showall", controller.showAll)
module.exports = router