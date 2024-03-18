import { ReactNode } from "react";

interface MegaMenuDropdownSubMenuProps{
    subMenuName : string;
    mt?: number;
    children: ReactNode|ReactNode[];
}

export function MegaMenuDropdownSubMenu({children, subMenuName, mt = 0}:MegaMenuDropdownSubMenuProps){
    return(
        <div className={`space-y-4 mt-${mt}`}>
            <span
                    className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">{subMenuName}</span>
            {children}
        </div>
    );
}