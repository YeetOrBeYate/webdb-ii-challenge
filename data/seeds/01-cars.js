
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '78kyle1238d9', make: "Carolla", model:"Toyota", mileage:163894 },
        { VIN: '87ajcl2mom5x', make: "Rav4", model:"Toyota", mileage:113894},
        { VIN: '9a2bxdadu10h', make: "M3", model:"Mazda", mileage:80957}
      ]);
    });
};
