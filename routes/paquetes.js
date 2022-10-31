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
router.app.put('/id', Putpaquetes)
router.app.delete('/id', Deletepaquetes)

module.exports = router