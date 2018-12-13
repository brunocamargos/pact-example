import app from './src';

const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`Provider (Users) listening on port ${port}!`));

server.on('close', () => {
  console.log('Server closed!');
});
