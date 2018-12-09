import request from 'axios';

const getUsers = async (data) => {
  const GET_USERS_ENDPOINT = 'http://localhost:3000/users'

  const serviceResponse = await request.get(GET_USERS_ENDPOINT);
  return serviceResponse.data;
};

export default getUsers;