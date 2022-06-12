const { google } = require("googleapis");

export function setOauth2Client() {
  const OAuth2Client = new google.auth.OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET
  );

  OAuth2Client.setCredentials({
    refresh_token: process.env.OAUTH_CLIENT_REFRESH_TOKEN,
  });
  return OAuth2Client.getAccessToken();
}
