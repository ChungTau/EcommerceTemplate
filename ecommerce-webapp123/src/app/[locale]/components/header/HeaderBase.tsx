import {usePathname} from "next/navigation";
import BrandTitle from "./BrandTitle";
import LinkItem from "./LinkItem";
import MenuButton from "./MenuButton";
import {MegaMenu, MegaMenuCard, MegaMenuDropdownGroup, MegaMenuDropdownSubMenu, MegaMenuMenuItem} from "../megaMenu";
import {FaBookOpen} from "react-icons/fa6";
import { ThemeSwitcher } from "../themeSwitcher";
import { pages } from "@/config/route";
import Divider from "../Divider";
import { LoginButton } from "./LoginButton";
import { TFunction } from "i18next";
import { LangSwitcher } from "../langSwitcher";

type HeaderBaseProps = {
    t: ((key: string) => string) & TFunction<"translation", undefined>;
    lng: string;
  };

export default function HeaderBase({ t, lng }:HeaderBaseProps) {

    const pathName = usePathname();
    return (
        <header
            className="flex top-0 fixed flex-wrap h-16 sm:justify-start transition-colors delay-[20ms] sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-zinc-800 dark:border-gray-700">
            <nav
                className="relative max-w-7xl w-full mx-auto px-4 sm:flex items-center transition-colors delay-[20ms] bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md justify-between sm:px-6 lg:px-8"
                aria-label="Global">
                <div className="flex items-center justify-between">
                    <BrandTitle/>
                    <MenuButton/>
                </div>
                <div
                    id="navbar-collapse-with-animation"
                    className="hs-collapse hidden overflow-hidden h-full transition-all duration-300 basis-full grow sm:block">
                    <div
                        className="hs-accordion-group h-full flex flex-col gap-y-4 gap-x-0 mt-5 text-lg sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-6 sm:mt-0 sm:ps-6 pb-4 sm:pb-0">
                        {pages.map((page)=><LinkItem key={page.name} href={`/${lng}${page.path}`} name={t(page.path.split("/")[1])} currentPath={pathName}/>)}

                        <MegaMenu name={t("product")}>
                            <MegaMenuDropdownGroup>
                                <MegaMenuDropdownSubMenu subMenuName="About us">
                                    <MegaMenuMenuItem itemName="Support Docs" icon={FaBookOpen} href="#"/>
                                </MegaMenuDropdownSubMenu>
                                <MegaMenuDropdownSubMenu mt={7} subMenuName="About us">
                                    <MegaMenuMenuItem itemName="Support Docs" icon={FaBookOpen} href="#"/>
                                </MegaMenuDropdownSubMenu>
                            </MegaMenuDropdownGroup>
                            <MegaMenuDropdownGroup>
                                <MegaMenuDropdownSubMenu subMenuName="About us">
                                    <MegaMenuMenuItem itemName="Support Docs" icon={FaBookOpen} href="#"/>
                                </MegaMenuDropdownSubMenu>
                                <MegaMenuDropdownSubMenu mt={7} subMenuName="About us">
                                    <MegaMenuMenuItem itemName="Support Docs" icon={FaBookOpen} href="#"/>
                                </MegaMenuDropdownSubMenu>
                            </MegaMenuDropdownGroup>
                            <MegaMenuCard name="Customer Stories" description="asdasdasdasdasd"/>
                        </MegaMenu>
                        <Divider className="hidden sm:block"/>
                        <ThemeSwitcher/>
                        <LangSwitcher/>
                        <LoginButton/>
                    </div>
                </div>
            </nav>
        </header>
    );
}