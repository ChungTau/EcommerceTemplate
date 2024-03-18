import { APP_TITLE } from "@/config/app";
import { LinkWithLocale } from "./LinkWithLocale";

export default function BrandTitle(){
    return (
        <LinkWithLocale className="mt-1 mx-2 md: flex-none font-kalam text-xl items-center justify-center font-bold dark:text-white text-zinc-700" href="/" aria-label="Brand">{APP_TITLE}</LinkWithLocale>
    );
};