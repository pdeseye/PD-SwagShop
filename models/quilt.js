import mongoose from "mongoose"
import * as review from "./review.js"

const Schema = mongoose.Schema

const quiltSchema = new Schema({
    title: String,
    created: String,
    imageUrl: String,
    description: String,
    reviews: [review.reviewSchema]
}, {
    timestamps: true
})

const Quilt = mongoose.model('Quilt', quiltSchema)

export {
  Quilt
}