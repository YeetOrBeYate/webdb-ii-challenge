
exports.up = function(knex) {
   return knex.schema.createTable('sales',tbl=>{
        tbl.increments();
    
        tbl.float('Price')
        .notNullable();

        tbl.integer('CarId').references('id').inTable('cars')
        .notNullable();

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales')
};
