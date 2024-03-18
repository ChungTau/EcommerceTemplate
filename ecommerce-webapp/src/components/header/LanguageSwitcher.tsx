'use client';

import {localeCodes} from "@/lib/i18n/settings";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarShortcut,
    MenubarTrigger
} from "../ui/menubar";
import {Globe} from "lucide-react";
import {LinkWithLocale} from "./LinkWithLocale";

export function LanguageSwitcher() {
    return (
        <Menubar className="flex h-10 items-center space-x-1 bg-transparent dark:bg-transparent rounded-md p-1 border-none">
            <MenubarMenu>
                <MenubarTrigger
                    className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-none transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 hover:dark:bg-gray-100/[0.1] hover:text-accent-foreground h-10 w-10 data-[state=open]:dark:bg-gray-100/[0.1] data-[state=open]:bg-gray-100/[0.1] focus:bg-gray-100/[0.1]"><Globe/></MenubarTrigger>
                <MenubarContent className="mt-2">
                    {Object
                        .entries(localeCodes)
                        .map(([key, value]) => (
                            <LinkWithLocale key={key} locale={key}>
                                <MenubarItem>
                                    {value}
                                    <MenubarShortcut>{key}</MenubarShortcut>
                                </MenubarItem>
                            </LinkWithLocale>
                        ))}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
};