const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');
const { db, models } = require('./config/modelConfig');

const sequelize = new Sequelize('movie_booking', 'sowmya', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
  logging: false
});


const umzug = new Umzug({
  migrations: {
    glob: 'migrations/*.js',
    resolve: ({ name, path, context }) => {
      const migration = require(path)
      return {
        name,
        up: async () => migration.up(context, db),
        down: async () => migration.down(context, db),
      }
    },
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});


(async () => {
  // Checks migrations and run them if they are not already applied. To keep
  // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
  // will be automatically created (if it doesn't exist already) and parsed.
  const func = process.argv[2].split('--flag=')[1];   // node migrate.js --flag=up
  await umzug[func]();  // await umzug.up();  await umzug.down();
  
})();


