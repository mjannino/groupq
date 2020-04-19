// database.js

const Sequelize = require('sequelize');
const db = new Sequelize(
  'postgres', process.env.DB_USER, process.env.DB_PASSWORD,
  {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'postgres',
      dialectOptions: {
          ssl: process.env.DB_SSL == "true"
      }
  });

const User = sequelize.define('User', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

module.exports = {
    db: db,
    Person: Person
};