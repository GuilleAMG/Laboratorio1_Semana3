const {Router} = require('express')
const{
    Getseguimiento,
    Postseguimiento,
    Putseguimiento,
    Deleteseguimiento
} = require('../controllers/seguimiento')

const router = Router();

router.get('/', Getseguimiento)
router.app.post('/', Postseguimiento)
router.app.put('/id', Putseguimiento)
router.app.delete('/id', Deleteseguimiento)

module.exports = router