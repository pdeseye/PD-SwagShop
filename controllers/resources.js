import { Resource } from '../models/resource.js'

function show(req, res){
    Resource.findById(req.params.id, function(err, resource) {
        res.render('resources/show', {title: `${resource.title}`, resource, user: req.user})
    })
}

function newResource(req, res) {
    res.render('resources/new', { title: 'Add New Resource', user: req.user})
}

function create(req, res) {
    const resource = new Resource(req.body)
    resource.save(function(err) {
        if (err) return res.render('resources/new')
        res.redirect('/resources');
    })
}

function index(req, res) {
    Resource.find({})
    .then(resources => {
      res.render('resources/index', { title: 'Resources', user: req.user, resources: resources })
    })
}


function createReview(req, res) {
    Resource.findById(req.params.id, function(err, resource) {
        resource.reviews.push(req.body)
        resource.save(function(err) {
            res.redirect(`/resources/${resource._id}`)
        })
    })
}

export {
  index,
  create,
  newResource as new,
  show,
  createReview
}