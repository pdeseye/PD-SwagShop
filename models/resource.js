import mongoose  from 'mongoose'
import * as review from "./review.js"

const Schema = mongoose.Schema

const resourceSchema = new Schema ({
    title: String,
    description: String,
    link: String,
    imageUrl: String,
    reviews: [review.reviewSchema]
}, {
    timestamps: true
})

const Resource = mongoose.model('Resource', resourceSchema)

export {
  Resource
}
