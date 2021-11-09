import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    reviewer: String,
    rating: {type: Number, min: 1, max: 5},
    content: String
}, {
    timestamps: true
})

const quiltSchema = new Schema({
    title: String,
    created: String,
    imageUrl: String,
    description: String,
    reviews: [reviewSchema]
}, {
    timestamps: true
})

const Quilt = mongoose.model('Quilt', quiltSchema)

export {
  Quilt
}