import { BaseProps } from "@/types/baseProps";
import NavItems from "./NavItems";

export const HeaderBase = ({t, lng}:BaseProps) => {
    return (
        <header
            className="fixed top-0 flex h-16 w-full items-center px-4 md:px-6 shadow">
            <NavItems t={t} lng={lng}/>
        </header>
    );
}

export default HeaderBase;