import app from './src';

const port = 3001;
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.on('close', () => {
  console.log('Server closed!');
});
