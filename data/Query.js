const db = require('./db.js');

const getAll= ()=>{
    return db
    .select('*')
    .from('cars')
}

const getById = (id)=>{
    return db
    .select('*')
    .from('cars')
    .where('id', id)
    .first()
}

const postCar= (car)=>{
    return db('cars')
    .insert(car)
    .then(ids=>{
        return getById(ids[0])
    })
}

const EditCar= async (id,car)=>{
    await db('cars')
    .where('id', id)
    .update(car)

    return getById(id)
}

const DeleteCar =(id)=>{
    return db('cars')
    .where('id', id)
    .del()
}

module.exports ={
    getAll,
    getById,
    postCar,
    EditCar,
    DeleteCar
}