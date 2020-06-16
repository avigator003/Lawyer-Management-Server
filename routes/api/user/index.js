const router = require('express').Router()
const controller = require('./user.controller')

router.get('/list', controller.list)
router.post('/assign-admin/:username', controller.assignAdmin)
router.post('/resetpassword', controller.resetpassword)
router.post('/setpassword', controller.setpassword)
router.post('/verify', controller.verify)
router.get('/delete/:id', controller.deleteUser)


module.exports = router