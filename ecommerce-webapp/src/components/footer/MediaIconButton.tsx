import Link from "next/link";
import { Button } from "../ui/button";
import LucideIcon from "../LucideIcon"; // Import the LucideIcon component
import { IconProps } from "@/types/iconProps";

interface MediaIconButtonProps {
    href: string;
    iconName: IconProps["name"];
}

export function MediaIconButton({ href, iconName }: MediaIconButtonProps) {
    return (
        <Link href={href}>
            <Button variant="ghost" size="icon" className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800">
                <LucideIcon name={iconName} />
            </Button>
        </Link>
    );
}
