const ONE_USER_BODY = [{ name: 'João', email: "joao@gmail.com" }];

const getUsersInteraction = {
  state: 'it has one user',
  uponReceiving: 'a request for users',
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