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
router.app.put('/', Putprecios)
router.app.delete('/', Deleteprecios)

module.exports = router