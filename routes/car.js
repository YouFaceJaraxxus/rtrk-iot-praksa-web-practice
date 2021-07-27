const express = require('express');
const router = express.Router();
const carDao = require('../dao/carDao');

router.get('/', (req, res) => {
    carDao.getAllCars(result => {
        res.status(200).json({
            cars : result
        })
    })
})

router.get('/:id', (req, res) => {
    let carId = req.params.id;
    if(carId){
        carDao.getCarById(carId, result => {
            if(result){
                res.status(201).json({
                    result
                })
            }
            else{
                res.status(404).json({
                    error : 'Car not found'
                })
            }
        })
    }else{
        res.status(422).json({
            error : 'Invalid parameters.'
        })
    }
})

router.post('/', (req, res) => {
    let carName = req.body.name;
    if(carName){
        carDao.addCar(carName, result => {
            res.status(201).json({
                result
            })
        })
    }else{
        res.status(422).json({
            error : 'Invalid parameters.'
        })
    }
})

router.put('/:id', (req, res) => {
    let carId = req.params.id;
    let carName = req.body.name;
    if(carId&&carName){
        carDao.updateCar(carId, carName, result => {
            if(result&&result.affectedRows>0){
                res.status(200).json({
                    result
                })
            }
            else{
                res.status(404).json({
                    error : 'Car not found'
                })
            }
        })
    }else{
        res.status(422).json({
            error : 'Invalid parameters.'
        })
    }
})

router.delete('/:id', (req, res) => {
    let carId = req.params.id;
    if(carId){
        carDao.deleteCar(carId, result => {
            res.status(204).json({
                result
            })
        })
    }else{
        res.status(422).json({
            error : 'Invalid parameters.'
        })
    }
})

//just as an example of query parameters
router.delete('/', (req, res) => {
    let carId = req.query.carId;
    if(carId){
        carDao.deleteCar(carId, result => {
            res.status(204).json({
                result
            })
        })
    }else{
        res.status(422).json({
            error : 'Invalid parameters.'
        })
    }
})

module.exports = router;
