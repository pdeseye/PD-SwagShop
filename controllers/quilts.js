import { Quilt } from '../models/quilt.js'



function update(req,res){
    Quilt.findByIdAndUpdate(req.params.id, req.body, function(err, quilt) {
        res.redirect(`/quilts/${quilt._id}`)
    })
}


function edit(req,res) {
    if (req.user.email === 'desaibpayal@gmail.com') {
        Quilt.findById(req.params.id, function(err, quilt) {
            res.render('quilts/edit', {title: `${quilt.title}`, quilt, user: req.user})
        })   
    } else {
        res.redirect('/quilts');
    }
}

function deleteQuilt(req,res){
    if (req.user.email === 'desaibpayal@gmail.com') {
        Quilt.findByIdAndRemove(req.params.id, function() {
            res.redirect('/quilts')
        })
    } else {
        res.redirect('/quilts')
    }
}

function create(req, res) {
    const quilt = new Quilt(req.body)
    quilt.save(function(err) {
        if (err) return res.render('quilts/new')
        res.redirect('/quilts');
    })      
}

function newQuilt(req, res) {
    if (req.user.email === 'desaibpayal@gmail.com') {
        res.render('quilts/new', { title: 'Add New Piece', user: req.user}) 
    } else {
        res.redirect('/quilts');
    }
}

function show(req, res){
    Quilt.findById(req.params.id, function(err, quilt) {
        res.render('quilts/show', {title: `${quilt.title}`, quilt, user: req.user})
    })
}

function index(req, res) {
    Quilt.find({})
    .then(quilts => {
      res.render('quilts/index', { title: 'PD-SwagShop', user: req.user, quilts })
    })
}

export {
  index,
  show,
  newQuilt as new,
  create,
  deleteQuilt as delete,
  edit,
  update
}