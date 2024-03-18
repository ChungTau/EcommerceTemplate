import MegaMenuButton from "./MegaMenuButton"
import { ReactNode } from "react";
import { MegaMenuDropdownMenu } from "./MegaMenuDropdownMenu";

interface MegaMenuProps{
    name: string;
    children: ReactNode|ReactNode[]|undefined;
}

export function MegaMenu({name, children}: MegaMenuProps) {
    return (
        <div
            className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-2 sm:py-6">
            <MegaMenuButton name={name}/>
            <MegaMenuDropdownMenu>
                {children}
            </MegaMenuDropdownMenu>
        </div>
    );
}

export {MegaMenuDropdownGroup} from "./MegaMenuDropdownGroup";
export {MegaMenuDropdownSubMenu} from "./MegaMenuDropdownSubMenu";
export {MegaMenuMenuItem} from "./MegaMenuMenuItem";
export {MegaMenuCard} from "./MegaMenuCard";