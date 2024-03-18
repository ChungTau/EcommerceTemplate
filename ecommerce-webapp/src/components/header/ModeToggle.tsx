'use client';

import * as React from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react";
import { ActionButton } from "./ActionButton";

export function ModeToggle() {
    const [isMounted, setIsMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light")
    }

    if (!isMounted) {
        return null;
    }

    if (typeof resolvedTheme === "undefined") {
        return null;
    }

    return (
        <ActionButton
            onClick={toggleTheme} // Call toggleTheme function on button click
        >
            <SunIcon
                className={`h-[1.2rem] w-[1.2rem] transition-all ${resolvedTheme === "light" ? "block" : "hidden"} dark:-rotate-90 dark:scale-0`}
            />
            <MoonIcon
                className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${resolvedTheme === "dark" ? "block" : "hidden"} dark:rotate-0 dark:scale-100`}
            />
            <span className="sr-only">Toggle theme</span>
        </ActionButton>
    );
}
