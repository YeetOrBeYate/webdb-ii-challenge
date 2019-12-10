
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl=>{
        tbl.increments();

        tbl.string('VIN',20)
        .unique()
        .notNullable();

        tbl.string('make',50)
        .unique()
        .notNullable();

        tbl.string('model',18)
        .unique()
        .notNullable();

        tbl.integer('mileage',13)
        .unique()
        .notNullable();

        tbl.string('transmission_type', 50)
        .nullable();

        tbl.string('status', 60)
        .nullable();
    })
  
};

exports.down = function(knex) {
  
};
