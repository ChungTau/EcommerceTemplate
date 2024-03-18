import BrandTitle from "./BrandTitle";
import MenuButton from "./MenuButton";
import Divider from "../Divider";
import {ModeToggle} from "./ModeToggle";
import {LanguageSwitcher} from "./LanguageSwitcher";
import { BaseProps } from "@/types/baseProps";
import NavBar from "./NavBar";

export const HeaderBase = ({t, lng}:BaseProps) => {
    return (
        <header
            className="fixed top-0 flex h-16 w-full shrink-0 items-center px-4 md:px-6 shadow">
            <div className="flex items-center justify-between w-full">
                <BrandTitle/>
                <MenuButton/>
            </div>
            <div className="hidden sm:flex ml-auto gap-2 h-full items-center">
                <NavBar t={t} lng={lng}/>
                <Divider/>
                <ModeToggle/>
                <LanguageSwitcher/>
            </div>
        </header>
    );
}

export default HeaderBase;