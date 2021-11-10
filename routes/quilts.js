import { Router } from 'express'
import * as quiltsCtrl from '../controllers/quilts.js'
const router = Router()

router.get('/new', isLoggedIn, quiltsCtrl.new)
router.post('/', quiltsCtrl.create)
router.get('/', isLoggedIn, quiltsCtrl.index)
router.get('/:id/edit', isLoggedIn, quiltsCtrl.edit)
router.get('/:id', quiltsCtrl.show)
router.put('/:id', isLoggedIn, quiltsCtrl.update)
router.delete('/:id', isLoggedIn, quiltsCtrl.delete)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}