import { useTranslation } from "@/lib/i18n";
import { LocaleProps } from "@/types/localeProps";
import HeaderBase from "./Base";

export const Header = async({lng}:LocaleProps) => {
    const { t } = await useTranslation(lng, "header");
    return (
        <HeaderBase t={t} lng={lng}/>
    );
}
