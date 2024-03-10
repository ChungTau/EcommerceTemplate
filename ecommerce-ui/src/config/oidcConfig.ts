import { OidcClientSettings } from "oidc-client-ts";

// Ensure environment variables are properly set and have string values
const REACT_APP_OIDC_AUTHORITY = process.env.REACT_APP_OIDC_AUTHORITY;
const REACT_APP_OIDC_CLIENT_ID = process.env.REACT_APP_OIDC_CLIENT_ID;
const REACT_APP_OIDC_CLIENT_SECRET = process.env.REACT_APP_OIDC_CLIENT_SECRET;
const REACT_APP_PROJECT_URL = process.env.REACT_APP_PROJECT_URL;
if (!REACT_APP_OIDC_AUTHORITY || !REACT_APP_OIDC_CLIENT_ID || !REACT_APP_PROJECT_URL || !REACT_APP_OIDC_CLIENT_SECRET) {
  throw new Error("OIDC authority or client ID not provided");
}

// Define OIDC configuration
const oidcConfig: OidcClientSettings = {
  authority: REACT_APP_OIDC_AUTHORITY,
  client_id: REACT_APP_OIDC_CLIENT_ID,
  client_secret: REACT_APP_OIDC_CLIENT_SECRET,
  redirect_uri: REACT_APP_PROJECT_URL
};

export default oidcConfig;
