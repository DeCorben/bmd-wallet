import fastify from 'fastify';

fastify()
  .then((server) => server.get('/', (req,res) => {
    res.send('Hello, World!');
  })
  .then((server) => server.listen(4242))
  .then(() => {console.log('Listening on 4242');});

