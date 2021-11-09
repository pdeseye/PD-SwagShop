import { Router } from 'express'
import * as resourcesCtrl from '../controllers/resources'

const router = Router ()

router.get('/', isLoggedIn, resourcesCtrl.index)
router.post('/', isLoggedIn, resourcesCtrl.create)
router.get('/new', isLoggedIn, resourcesCtrl.new)
router.get('/:id', isLoggedIn, resourcesCtrl.show)


export {
  router
}