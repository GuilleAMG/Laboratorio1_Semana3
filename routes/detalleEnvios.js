const {Router} = require('express')
const{
    GetdetalleEnvios,
    PostdetalleEnvios,
    PutdetalleEnvios,
    DeletedetalleEnvios
} = require('../controllers/detalleEnvios')

const router = Router();

router.get('/', GetdetalleEnvios)
router.app.post('/', PostdetalleEnvios)
router.app.put('/', PutdetalleEnvios)
router.app.delete('/', DeletedetalleEnvios)

module.exports = router