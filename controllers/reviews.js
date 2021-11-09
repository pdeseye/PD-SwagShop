import { Quilt } from '../models/quilt.js'
import { Resource } from '../models/resource.js'



function createReview(req, res) {
    Resource.findById(req.params.id, function(err, resource) {
        resource.reviews.push(req.body)
        resource.save(function(err) {
            res.redirect(`/resources/${resource._id}`)
        })
    })
}


function create(req, res) {
    Quilt.findById(req.params.id, function(err, quilt) {
        quilt.reviews.push(req.body)
        quilt.save(function(err) {
            res.redirect(`/quilts/${quilt._id}`)
        })
    })
}

export {
  create,
  createReview
}