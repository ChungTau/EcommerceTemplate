import {routes} from "@/config/route";
import {NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList} from "../ui/navigation-menu";
import {LinkWithLocale} from "./LinkWithLocale";
import {BaseProps} from "@/types/baseProps";

export default function NavBar({t, lng} : BaseProps) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
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
            </NavigationMenuList>
        </NavigationMenu>
    );
};