const {Router} = require('express')
const{
    Getpaquetes,
    Postpaquetes,
    Putpaquetes,
    Deletepaquetes
} = require('../controllers/paquetes')

const router = Router();

router.get('/', Getpaquetes)
router.app.post('/', Postpaquetes)
router.app.put('/', Putpaquetes)
router.app.delete('/', Deletepaquetes)

module.exports = router