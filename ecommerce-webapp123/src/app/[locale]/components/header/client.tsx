"use client";
import { useTranslation } from "@/i18n/client";
import HeaderBase from "./HeaderBase";

type HeaderProps = { lng: string };
export const Header = ({ lng }: HeaderProps) => {
  const { t } = useTranslation(lng, "header");
  return <HeaderBase t={t} lng={lng} />;
};