import pact from '@pact-foundation/pact-node';
import path from 'path';
import { version as consumerVersion } from '../package.json';

const PACT_BROKER_URL = 'http://localhost';

const opts = {
  pactFilesOrDirs: [path.resolve(__dirname, '../pacts/')],
  pactBroker: PACT_BROKER_URL,
  tags: ['dev', 'test'],
  consumerVersion,
};

pact
  .publishPacts(opts)
  .then(() => {
    console.log('Pact contract publishing completed!\r\n');
    console.log(`Head over to ${PACT_BROKER_URL} to see your published contracts.\r\n`);
  })
  .catch(error => {
    console.log('Pact contract publishing failed.');
    throw error;
  });