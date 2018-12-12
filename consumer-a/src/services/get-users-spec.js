import getUsers from './get-users';
import chai from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import usersProviderMock from '../../test/mocks/users-provider/users-provider-mock'
import getUsersInteraction from '../../test/mocks/users-provider/interactions/get-users-interaction';

const expect = chai.expect;

describe('GetUsers', () => {
  const sandbox = sinon.createSandbox();

  before(async () => usersProviderMock.setup());

  afterEach(() => sandbox.restore());

  after(async () => usersProviderMock.finalize());

  it('should get Users from service', async () => {
    await usersProviderMock.addInteraction(getUsersInteraction);
    const expected = getUsersInteraction.willRespondWith.body;
    const user = await getUsers();
    expect(user).to.deep.equal(expected);
    const t = await usersProviderMock.verify();
  });
});
