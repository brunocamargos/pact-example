import users from './users';

const deleteUsers = () => (users.splice(0, users.length));

export default deleteUsers;