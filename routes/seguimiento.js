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
router.app.put('/', Putseguimiento)
router.app.delete('/', Deleteseguimiento)

module.exports = router