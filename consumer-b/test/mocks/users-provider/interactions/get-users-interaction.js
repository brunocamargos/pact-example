const ONE_USER_BODY = [{ name: 'João', birthday: '1989-11-13' }];

const getUsersInteraction = {
  state: 'it has one user with name and birthday',
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