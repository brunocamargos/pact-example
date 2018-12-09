import getUsers from '../services/get-users'

const getBirthdays = async (req, res, next) => {
  const birthdays = (await getUsers()).map(({ name, birthday }) => ({ name, birthday }));
  res.status(200).json(birthdays);
  return next();
};

export default getBirthdays;
