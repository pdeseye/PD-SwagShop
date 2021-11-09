import { User } from '../models/user.js'


function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { title: 'PD-SwagShop', user: req.user, users })
  })
}

export {
  index,
}