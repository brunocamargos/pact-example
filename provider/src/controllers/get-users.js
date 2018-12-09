const users = [{
  name: 'João',
  email: 'joao@gmail.com',
  birthday: '1989-11-13',
},
{
  name: 'Maria',
  email: 'maria@gmail.com',
  birthday: '1993-03-09',
},
{
  name: 'José',
  email: 'jose@gmail.com',
  birthday: '1989-11-13',
},
{
  name: 'Fulano',
  email: 'fulano@gmail.com',
  birthday: '2000-10-17',
}];

const getUsers = async (req, res, next) => {
  res.status(200).json(users);
  return next();
};

export default getUsers;
