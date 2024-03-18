import { BaseProps } from "@/types/baseProps";
import { NavBar } from "./navbar";

export const HeaderBase = ({t, lng}:BaseProps) => {
    return (
        <header
            className="fixed top-0 flex h-16 w-full shrink-0 items-center px-4 md:px-6 shadow">
            <NavBar t={t} lng={lng}/>
        </header>
    );
}

export default HeaderBase;