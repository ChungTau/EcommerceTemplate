'use client';

import Link from "next/link";
interface LinkItemProp {
    href: string;
    name: string;
    currentPath: string;
}
export default function LinkItem({ href, name, currentPath }: LinkItemProp) {
    const isActive = currentPath === href;

    return (
        <Link href={href} passHref className={`justify-center items-center text-center font-medium no-underline ${isActive ? 'text-zinc-800 dark:text-zinc-300' : 'text-gray-500 hover:text-gray-400'} py-2 md:py-6 `} aria-current={isActive ? "page" : undefined}>
            {name}
        </Link>
    );
}
