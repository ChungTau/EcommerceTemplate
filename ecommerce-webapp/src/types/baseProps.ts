import {TFunction} from "i18next";

export type BaseProps = {
    t: ((key : string) => string) & TFunction < "translation",
    undefined >;
    lng: string;
};