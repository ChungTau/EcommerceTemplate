import { languages } from "@/i18n/settings";
import { usePathname } from "next/navigation";

export const LanguageSelector = () => {
    const pathName = usePathname();
    const href = `/${pathName.split("/")[2]}`;
    return (
        <>
            {languages.map(language => (
                Object.entries(language).map(([key, value]) => (
                    <a key={key}
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                    href={`/${key}${href}`}>
                    {value}
                </a>
                ))
            ))}
        </>
    );
};
