
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        { Price: 5201.97, CarID: 1},
        { Price: 6174.18, CarID: 1},
        { Price: 7156.50, CarID: 1}
      ]);
    });
};
