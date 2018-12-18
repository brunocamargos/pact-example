const getEmptyUsersInteraction = {
  state: 'it has no user',
  uponReceiving: 'a request to retrieve an empty list of users',
  withRequest: {
    method: 'GET',
    path: '/users'
  },
  willRespondWith: {
    status: 200,
    body: []
  }
}

export default getEmptyUsersInteraction;