const router = require('express').Router()
const controller = require('./features.controller')


router.post("/createlist", controller.createList)
router.get("/deletelist/:id", controller.deleteList)
router.get("/showall", controller.showAll)
module.exports = router