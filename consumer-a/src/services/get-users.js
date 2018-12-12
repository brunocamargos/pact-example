import axios from 'axios';

const getUsers = async (request = axios) => {
  const GET_USERS_ENDPOINT = 'http://localhost:3000/users'

  const serviceResponse = await request.get(GET_USERS_ENDPOINT);
  return serviceResponse.data;
};

export default getUsers;