// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'vx8ebvr001'
export const apiEndpoint = `https://${apiId}.execute-api.ap-south-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'sidz.auth0.com',            // Auth0 domain
  clientId: 'zi6i12w7Spye9W9sq3tEa2akXM1d1m2n',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
