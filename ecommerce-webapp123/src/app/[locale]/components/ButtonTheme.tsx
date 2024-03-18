import { ReactNode } from "react";

interface ButtonThemeProps {
    children?: ReactNode|ReactNode[]|undefined;
};

export function ButtonTheme({children}:ButtonThemeProps){
    return(
        <div
            className="flex items-center justify-center gap-x-1 py-2 md:py-6 font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
                {children}
            </div>
    );
}