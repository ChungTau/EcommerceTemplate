import { APP_TITLE } from "@/config/app";

export default function BrandTitle(){
    return (
        <a className="mt-1 mx-2 md: flex-none font-kalam text-xl items-center justify-center font-bold dark:text-white text-zinc-700" href="/" aria-label="Brand">{APP_TITLE}</a>
    );
};