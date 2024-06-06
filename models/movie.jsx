import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    })

const movie = mongoose.models.movie || mongoose.model('movie', movieSchema)

export default  movie;