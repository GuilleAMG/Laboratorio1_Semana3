const {Router} = require('express')
const{
    Getprecios,
    Postprecios,
    Putprecios,
    Deleteprecios
} = require('../controllers/precios')

const router = Router();

router.get('/', Getprecios)
router.app.post('/', Postprecios)
router.app.put('/id', Putprecios)
router.app.delete('/id', Deleteprecios)

module.exports = router