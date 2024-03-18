import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChildrenProps } from "@/types/childrenProps";
import clsx from "clsx";

interface LinkWithLocaleProps extends ChildrenProps {
    locale?: string | null;
    href?: string | null;
    className?: string | null; 
}

export const LinkWithLocale = React.forwardRef<HTMLAnchorElement, LinkWithLocaleProps>(
    ({ locale, href, children, className }: LinkWithLocaleProps, ref) => {
        const pathName = usePathname();
        const [basePath, subRoute] = pathName.split("/").slice(1);

        const resolvedLocale = locale ?? basePath ?? "en";
        const resolvedHref = href ?? (subRoute ? `/${subRoute}` : "/");

        const linkClass = className?? clsx("group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium hover:bg-gray-100 hover:dark:bg-gray-100/[0.1]");

        return (
            <Link href={`/${resolvedLocale}${resolvedHref}`} passHref ref={ref} className={href ? linkClass : undefined}>
                {children}
            </Link>
        );
    }
);
