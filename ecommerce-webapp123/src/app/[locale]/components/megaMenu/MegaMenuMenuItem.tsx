import { IconType } from "react-icons";

interface MegaMenuMenuItemProps {
    itemName : string;
    href: string;
    textColor?: string;
    hoverTextColor?: string;
    darkTextColor?: string;
    icon: IconType;
}

export function MegaMenuMenuItem({itemName, href, textColor="text-gray-800", hoverTextColor="hover:text-blue-600", darkTextColor="dark:text-gray-200", icon} : MegaMenuMenuItemProps) {
    const Icon = icon;
    return (
        <a
            className={`flex gap-x-4 ${textColor} ${hoverTextColor} ${darkTextColor} dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
            href={href}>
            <Icon/>
            <div className="grow">
                <p>{itemName}</p>
            </div>
        </a>
    );
};