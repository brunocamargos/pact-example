import app from './src';

const port = process.env.PORT || 3001;

const server = app.listen(port, () => console.log(`ConsumerA listening on port ${port}!`));

server.on('close', () => {
  console.log('Server closed!');
});
