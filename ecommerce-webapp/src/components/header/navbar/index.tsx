import Divider from "@/components/Divider";
import { BrandTitle } from "../BrandTitle";
import { MenuButton } from "../MenuButton";
import NavItems from "../NavItems";
import { ModeToggle } from "../ModeToggle";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { BaseProps } from "@/types/baseProps";

export function NavBar({t, lng}:BaseProps){
    return(
        <>
            <div className="flex items-center justify-between w-full">
                    <BrandTitle/>
                    <MenuButton/>
            </div>
            <div className="hidden sm:flex ml-auto gap-2 h-full items-center">
                <NavItems t={t} lng={lng}/>
                <Divider/>
                <ModeToggle/>
                <LanguageSwitcher/>
            </div>
        </>
    );
}