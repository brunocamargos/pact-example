import getUsers from '../services/get-users'

const getEmails = async (req, res, next) => {
  const emails   = (await getUsers()).map(({ name, email }) => ({ name, email }));
  res.status(200).json(emails);
  return next();
};

export default getEmails;
