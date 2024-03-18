import {ReactNode} from "react";

interface MegaMenuDropdownGroupProps {
    children?: ReactNode | ReactNode[] | undefined;
}

export function MegaMenuDropdownGroup({children} : MegaMenuDropdownGroupProps):ReactNode {
    return (
        <div className="md:col-span-3">
            <div className="flex flex-col py-6 px-6">
                {children}
            </div>
        </div>
    );
}