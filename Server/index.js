
const db = require('./config/dbConfig');
const Hapi = require('hapi');
const routeHandler = require('./routes/index');
const plugins = require('./plugins/plugins');
const strategies =  require('./plugins/strategies');


const server = new Hapi.Server();

server.connection({
  port: 8000,
  host: 'localhost',
})

async function apiCalls() {

  console.log("Welcome Sowmya!");

  server.register(plugins, (err) => {
    if (err) {
      console.log('Failed loading plugin...');
    }
  });

  for(let strategy of strategies){
    server.auth.strategy(strategy.name, strategy.scheme, strategy.options);
  }

  server.auth.default('session-cookie');

  server.route(routeHandler());

  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log("Server running at:", server.info.uri);
  })

}

db.startDB();

apiCalls();






