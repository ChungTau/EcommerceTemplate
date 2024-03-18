'use client';

import oidcConfig from "@/config/oidcConfig";
import { AuthProvider } from "react-oidc-context";

export function KeycloakProvider({children}:{children: React.ReactNode}) {
    return(
        <AuthProvider {...oidcConfig}>
            {children}
        </AuthProvider>
    );
}