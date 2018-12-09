import getUsers from '../services/get-users'

const getEmails = async (req, res, next) => {
  const users = await getUsers();
  console.log(users)
  const emails = users.map(({ name, email }) => ({ name, email }));
  res.status(200).json(emails);
  return next();
};

export default getEmails;
