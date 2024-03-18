import { ReactNode } from "react";

export type LocaleProps = { params: { locale: string } };
export interface PageProps extends LocaleProps{
    children: ReactNode;
}