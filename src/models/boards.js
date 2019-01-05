const mongoose = require('mongoose')
const { Schema } = mongoose;

const boardSchema = new Schema({
    status: { type: String, required: true },
    board: [{ type: String }, { type: String }, { type: String }, { type: String }, { type: String }, { type: String }, { type: String }, { type: String }, { type: String }],
    turn: { type: String },
    totalMoves: { type: Number }
})

module.exports = mongoose.model('Board', boardSchema)