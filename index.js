const gql = require("fastify-gql");
const schema = require("./schema");
const routes = require("./routes");
const fastify = require('./server')

fastify.register(gql, {
  schema,
  graphiql: true,
});

routes.forEach((route, index) => {
  fastify.route(route);
});

const run = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

run();
