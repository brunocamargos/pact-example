import { Verifier } from '@pact-foundation/pact';
import './provider-state';
import { version as providerVersion } from '../../package.json';

const options = {
  providerBaseUrl: 'http://localhost:3000',
  provider: 'Users',
  pactBrokerUrl: 'http://localhost',
  providerStatesSetupUrl: 'http://localhost:3000/test/setup',
  publishVerificationResult: true,
  providerVersion
};

new Verifier().verifyProvider(options).then(() => {
  console.log('success');
  process.exit(0);
}).catch((error) => {
  console.log('failed', error);
  process.exit(1);
});