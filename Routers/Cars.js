const express = require('express');
const Qs = require("../data/Query");

const router = express.Router();

router.get('/', (req,res)=>{
    Qs.getAll()
    .then((cars)=>{
        res.status(200).json({cars})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.get('/:id', (req,res)=>{
    const id = req.params.id;
    Qs.getById(id)
    .then((car)=>{
        res.status(200).json({car})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.post('/', (req,res)=>{
    const body = req.body;
    Qs.postCar(body)
    .then(cr=>{
        res.status(201).json({cr})
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})

router.put('/:id', (req,res)=>{
    const id = req.params.id;
    const body = req.body;

    Qs.EditCar(id, body)
    .then((car)=>{
        res.status(200).json({car})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.delete('/:id', (req,res)=>{
    const id = req.params.id;
    Qs.DeleteCar(id)
    .then(()=>{
        res.status(201).json({err:"yeet"})
    })
    .catch(err=>{
        res.status(500).json({err})
    })
})

module.exports = router;