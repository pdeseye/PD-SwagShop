import { Router } from 'express'
import * as quiltsCtrl from '../controllers/quilts.js'
const router = Router()

router.get('/new', isLoggedIn, quiltsCtrl.new)
router.post('/', quiltsCtrl.create)
router.get('/', quiltsCtrl.index)
router.get('/:id/edit', isLoggedIn, quiltsCtrl.edit)
router.get('/:id', quiltsCtrl.show)
router.put('/:id', isLoggedIn, quiltsCtrl.update)
router.delete('/:id', isLoggedIn, quiltsCtrl.delete)


export {
  router
}