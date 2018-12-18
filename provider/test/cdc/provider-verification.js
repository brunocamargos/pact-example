import { Verifier } from '@pact-foundation/pact';
import './provider-state';
import { version as providerVersion } from '../../package.json';

const PACT_BROKER_URL = 'http://localhost';

const options = {
  providerBaseUrl: 'http://localhost:3000',
  provider: 'Users',
  pactBrokerUrl: PACT_BROKER_URL,
  providerStatesSetupUrl: 'http://localhost:3000/test/setup',
  publishVerificationResult: true,
  providerVersion
};

new Verifier()
  .verifyProvider(options)
  .then(() => {
    console.log('Provider verification completed!\r\n');
    console.log(`Head over to ${PACT_BROKER_URL} to see your contracts.\r\n`);
    process.exit(0);
  })
  .catch((error) => {
    console.log('Provicer verification failed.');
    throw error;
  });