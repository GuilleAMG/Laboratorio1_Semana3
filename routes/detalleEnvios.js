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
router.app.put('/:id', PutdetalleEnvios)
router.app.delete('/id', DeletedetalleEnvios)

module.exports = router