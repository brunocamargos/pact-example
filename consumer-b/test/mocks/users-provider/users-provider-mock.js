import path from 'path';
import { Pact } from '@pact-foundation/pact';

const usersProviderMock = new Pact({
  consumer: "ConsumerB",
  provider: "Users",
  port: 3000,
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  dir: path.resolve(process.cwd(), "pacts"),
  logLevel: "INFO",
  spec: 2
});

export default usersProviderMock;