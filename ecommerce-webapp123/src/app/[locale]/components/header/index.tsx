import { useTranslation } from "@/i18n";

import { LocaleProps } from "@/types/LocaleProps";
import HeaderBase from "./HeaderBase";

type HeaderProps = LocaleProps;
export const Header = async ({ params }: HeaderProps) => {
  const { t } = await useTranslation(params.locale, "header");
  return <HeaderBase t={t} lng={params.locale} />;
};