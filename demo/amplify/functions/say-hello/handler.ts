import { env } from '$amplify/env/say-hello';

export const handler = async (event) => {
  const request = new Request(env.API_ENDPOINT, {
    headers: {
      // this is the value of secret named "MY_API_KEY"
      Authorization: `Bearer ${env.API_KEY}`
    }
  })
  // ...
  return `Hello, ${env.NAME}!`;
};