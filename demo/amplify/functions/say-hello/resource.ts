import { defineFunction, secret } from "@aws-amplify/backend";

export const sayHello = defineFunction({
  environment: {
    NAME: "World",
    API_ENDPOINT: process.env.API_ENDPOINT,
    API_KEY: secret("MY_API_KEY"), // this assumes you created a secret named "MY_API_KEY"
  },
});
