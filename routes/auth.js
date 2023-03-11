/**
 * Rutas de Usuarios / Auth
 * host + api/auth
 */

const { Router } = require('express');
const router = Router();
const {
  createUser,
  revalidateToken,
  userLogin,
} = require('../controllers/auth');

router.post('/new', createUser);

router.post('/', userLogin);

router.get('/renew', revalidateToken);

module.exports = router;
