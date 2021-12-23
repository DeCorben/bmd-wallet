import fastify from 'fastify';
import statFast from 'fastify-static';
import path from 'path';

fastify()
  .then((server) => server.register(statFast, {
    root: path.resolve(path.dirname('.'), 'dist'),
  }))
  .then((server) => server.get('/', (_req, res) => {
    res.sendFile('index.html');
  }))
  .then((server) => server.listen(4242))
  .then(() => { console.log('Listening on 4242'); });
