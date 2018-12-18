import app from '../../src';
import { createUser, deleteUsers } from '../../src/domain';

const port = process.env.PORT || 3000

app.post('/test/setup', (req, res) => {
  const state = req.body.state;

  deleteUsers();
  switch (state) {
    case 'it has no user':
      break
    case 'it has one user':
      createUser({ name: 'João', email: 'joao@gmail.com', birthday: "1989-11-13" });
      break;
    default:
      break;
  };

  res.status(200).json();
});

app.listen(port, () => console.log(`Pact provider (Users) listening on port ${port}!`));