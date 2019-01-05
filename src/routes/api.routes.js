const express = require('express')
const router = express.Router()

const Board = require('../models/boards')

// get the boards from the data base here 

router.get('/api/boards', async (req, res) => { 
    const boards = await Board.find()
    res.json(boards)
})

// get an specific board

router.get('/api/boards/:id', async (req, res) => {
    const board = await Board.findById(req.params.id)
    res.json(board)
})

// add new board from the game 

router.post('/api/boards', async (req, res) => {
    const { status, board, totalMoves, turn } = req.body
    const boards = new Board({status, board, totalMoves, turn})
    await boards.save()
    res.json({status: 'the board was added'})
})

// re-play the game 

router.put('/api/boards/:id', async (req, res) => {
    const { status, board, turn, totalMoves } = req.body;
    const newBoard = {status, board,  totalMoves, turn}
    await Board.findByIdAndUpdate(req.params.id, newBoard)
    res.json({status: 'the game was recibed again'})
})

// delete the history

router.delete('/api/boards', async (req, res) => {
    await Board.remove()
    res.json({status: 'the history was deleted'})
})

module.exports = router