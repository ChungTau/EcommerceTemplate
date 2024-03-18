"use client";

import { LocaleProps } from "@/types/localeProps";

import { useTranslation } from "@/lib/i18n/client";
import HeaderBase from "./Base";

export const Header = ({lng}:LocaleProps) => {
    const { t } = useTranslation(lng, "header");
    return (
        <HeaderBase t={t} lng={lng}/>
    );
}
