const dao = require('./dao');

exports.getAllCars = (callback) => {
    let queryString = 'SELECT * FROM car';
    dao.sendQuery(queryString, result => {
        return callback(result);
    })
}

exports.getCarById = (carId, callback) => {
    let queryString = `SELECT * FROM car WHERE id = ${carId}`;
    dao.sendQuery(queryString, result => {
        if(result&&result.length>0) return callback(result[0]);
        else return callback(null);
    })
}

exports.addCar = (carName, callback) => {
    let queryString = `INSERT INTO car(name) VALUES ('${carName}')`;
    dao.sendQuery(queryString, result => {
        return callback(result);
    })
}

exports.updateCar = (carId, carName, callback) => {
    let queryString = `UPDATE car SET name = '${carName}' WHERE id = ${carId}`;
    dao.sendQuery(queryString, result => {
        return callback(result);
    })
}

exports.deleteCar = (carId, callback) => {
    let queryString = `DELETE FROM car WHERE id = ${carId}`;
    dao.sendQuery(queryString, result => {
        return callback(result);
    })
}