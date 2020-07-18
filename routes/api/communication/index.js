const router = require('express').Router()
const controller = require('./communication.controller')



router.post("/create", controller.create)
router.get("/delete/:id", controller.deleteCommunication)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.view)
router.get("/viewforuser/:id", controller.viewSpecific)

router.post("/edit/:id", controller.editCommunication)

module.exports = router