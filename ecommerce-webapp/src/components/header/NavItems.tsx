import {routes} from "@/config/route";
import {NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList} from "../ui/navigation-menu";
import {LinkWithLocale} from "./LinkWithLocale";
import {BaseProps} from "@/types/baseProps";
import {LanguageSwitcher} from "./LanguageSwitcher";
import Divider from "../Divider";
import {ModeToggle} from "./ModeToggle";
import {useEffect, useState} from "react";
import {BrandTitle} from "./BrandTitle";
import {MenuButton} from "./MenuButton";

export default function NavItems({t, lng} : BaseProps) {
    const [sidebarOpen,
        setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            // Close the sidebar when window width is greater than sm breakpoint
            if (window.innerWidth > 640) {
                setSidebarOpen(false);
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run effect only once
    return (
        <NavigationMenu className="flex items-center justify-between w-full max-w-full">
            <BrandTitle/>
            <div>
                <MenuButton onClick={toggleSidebar}/>

                <NavigationMenuList
                    className={`sm:flex flex-col sm:flex-row ml-auto gap-2 h-auto items-center ${sidebarOpen
                    ? 'w-full fixed top-16 left-0 right-0 justify-center rounded-b-lg bg-gradient-to-b dark:from-neutral-800  dark:to-neutral-800/65 pb-6 backdrop-blur-sm shadow from-white to-white/65'
                    : 'hidden'}`}>
                    {routes.map((route) => (
                        <NavigationMenuItem key={route.path}>
                            <NavigationMenuLink
                                asChild
                                className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium hover:bg-gray-100 hover:dark:bg-gray-100/[0.1]">
                                <LinkWithLocale href={route.path}>
                                    {t(route.name)}
                                </LinkWithLocale>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                    {!sidebarOpen &&< Divider />}
                    <ModeToggle/>
                    <LanguageSwitcher/>
                </NavigationMenuList>
                
            </div>
        </NavigationMenu>
    );
};