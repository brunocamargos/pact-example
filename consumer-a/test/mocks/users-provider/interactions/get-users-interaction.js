const ONE_USER_BODY = [{ name: 'João', email: 'joao@gmail.com' }];

const getUsersInteraction = {
  state: 'it has one user',
  uponReceiving: 'a request to retrieve a list of users',
  withRequest: {
    method: 'GET',
    path: '/users'
  },
  willRespondWith: {
    status: 200,
    body: ONE_USER_BODY
  }
}

export default getUsersInteraction;