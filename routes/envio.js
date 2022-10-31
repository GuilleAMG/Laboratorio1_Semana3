const {Router} = require('express')
const{
    Getenvio,
    Postenvio,
    Putenvio,
    Deleteenvio
} = require('../controllers/envio')

const router = Router();

router.get('/', Getenvio)
router.app.post('/', Postenvio)
router.app.put('/:id', Putenvio)
router.app.delete('/:id', Deleteenvio)

module.exports = router