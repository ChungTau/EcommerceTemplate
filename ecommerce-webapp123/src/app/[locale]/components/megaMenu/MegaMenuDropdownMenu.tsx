import {ReactNode} from "react";

interface MegaMenuDropdownMenuProps {
    children : ReactNode|ReactNode[]|undefined;
}

export function MegaMenuDropdownMenu({children} : MegaMenuDropdownMenuProps) {
    return (
        <div
            className="hs-dropdown-menu mx-4 mt-6 sm:mt-0 transition-[opacity, margin] duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-[520px] md:w-[580px] lg:w-[750px] hidden z-10 top-full end-0 overflow-hidden bg-white md:shadow-2xl rounded-lg dark:bg-zinc-700 dark:divide-zinc-600 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
            <div className="grid grid-cols-2 md:grid-cols-10">
                {children}
            </div>
        </div>
    );
}