import { OidcClientSettings } from "oidc-client-ts";

const OIDC_AUTHORITY = process.env.NEXT_PUBLIC_OIDC_AUTHORITY;
const OIDC_CLIENT_ID = process.env.NEXT_PUBLIC_OIDC_CLIENT_ID;
const OIDC_CLIENT_SECRET = process.env.NEXT_PUBLIC_OIDC_CLIENT_SECRET;
const PROJECT_URL = process.env.NEXT_PUBLIC_PROJECT_URL;
if (!OIDC_AUTHORITY || !OIDC_CLIENT_ID || !PROJECT_URL || !OIDC_CLIENT_SECRET) {
  throw new Error("OIDC authority or client ID not provided");
}

const oidcConfig: OidcClientSettings = {
  authority: OIDC_AUTHORITY,
  client_id: OIDC_CLIENT_ID,
  client_secret: OIDC_CLIENT_SECRET,
  redirect_uri: PROJECT_URL
};

export default oidcConfig;

