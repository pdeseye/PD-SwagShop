import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'

const router = Router ()

router.post('/quilts/:id/reviews', isLoggedIn, reviewsCtrl.create)
router.post('/resources/:id/reviews', isLoggedIn, reviewsCtrl.createReview)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

export {
  router
}