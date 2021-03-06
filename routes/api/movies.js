const express = require('express');
const router = express.Router();

const movies = require('../../models/module.js');

// @routes GET /api/v1/movies
// @desc GET all Movies

router.get('/', async (req, res) => {
    try {
        const movie = await movies.find()
        if (!movie) throw Error('Something Went wrong')

        res.status(201).json(movie)
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// @routes GET /api/v1/movies/:id
// @desc GET a single Movie

router.get('/:id', async (req, res) => {
    try {
        const movie = await movies.findById(req.params.id);
        if (!movie) throw Error('No Movies found');

        res.status(201).json(movie);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
})

// @routes POST /api/v1/movies
// @desc Create new Movie

// define  constant called newMovies and extract request Body from 'movies' model, now save the newMovies into MongoDB using save()

router.post('/', async (req, res) => {
    const newMovies = new movies(req.body);
    try {
        const movie = await newMovies.save();
        if (!movie) throw Error('Something went wrong');

        res.status(201).json(movie);

    } catch (err) {
        res.status(400).json({ msg: err })
    }
});

// @routes PUT /api/v1/movies/:id
// @desc Update a Movie

router.put('/:id', async (req,res)=> {
    try {
        const movie = await movies.findByIdAndUpdate(req.params.id, req.body);
        if (!movie) throw Error('No Movies found');

        res.status(201).json({ msg: "Movie Updated successfully" });
    } catch (err) {
        res.status(400).json({ msg: err });
    }
})

// @routes DELETE /api/v1/movies/:id
// @desc Delete a Movie

router.delete('/:id', async (req, res) => {
    try {
        const movie = await movies.findByIdAndDelete(req.params.id);
        if (!movie) throw Error('No Movies found');

        res.status(201).json({msg : "Movie Deleted from database"});

    } catch (err) {
        res.status(400).json({ msg: err })
    }
});

module.exports = router;