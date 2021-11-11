import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    reviewer: String,
    rating: {type: Number, min: 1, max: 5},
    content: String
}, {
    timestamps: true
})

export {
  reviewSchema
}