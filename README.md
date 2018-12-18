# pact-example
A simple example of Consumer-Driven Contract using Pact


## Prerequisites
[Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed

### Pact Broker
```
docker-compose up -d
```

## Installation
### ConsumerA
```
cd consumer-a
npm i
```
### ConsumerB
```
cd consumer-b
npm i
```
### Provider
```
cd provider
npm i
```

## Consumer Side

```
cd consumer-a
npm test
npm run publish-pacts
```

```
cd consumer-b
npm test
npm run publish-pacts
```

## Provider Side
```
cd provider
npm test-provider
```

Access http://localhost to see the Pact in action!

