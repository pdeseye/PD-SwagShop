import { Router } from 'express'
import * as resourcesCtrl from '../controllers/resources.js'

const router = Router ()

router.get('/', isLoggedIn, resourcesCtrl.index)
router.post('/', isLoggedIn, resourcesCtrl.create)
router.get('/new', isLoggedIn, resourcesCtrl.new)
router.get('/:id', isLoggedIn, resourcesCtrl.show)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}