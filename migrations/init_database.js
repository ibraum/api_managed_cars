const { Sequelize } = require("sequelize");
const Car = require("../models/Car");
const cars = require("./car_store/cars");

const sequelize = new Sequelize('car_manage', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const carFactory = Car

const createCarDB = () => {
    sequelize.sync({force: true}).then(_ => {
        cars.forEach(car => {
            carFactory.create(
                {
                    name: car.name,
                    categorie: car.categorie,
                    color: car.color,
                    other: car.other
                }
            )
        })
    })
} 

module.exports = {carFactory, createCarDB}