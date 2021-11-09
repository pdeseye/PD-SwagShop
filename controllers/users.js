import { User } from '../models/user'


function index(req, res) {
  User.find({})
  .then(users => {
    res.render('users/index', { title: 'Kailahs Kreations', user: req.user, users })
  })
}

export {
  index,
}