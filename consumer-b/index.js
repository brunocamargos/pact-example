import app from './src';

const port = process.env.PORT || 3002;

const server = app.listen(port, () => console.log(`ConsumerB listening on port ${port}!`));

server.on('close', () => {
  console.log('Server closed!');
});
