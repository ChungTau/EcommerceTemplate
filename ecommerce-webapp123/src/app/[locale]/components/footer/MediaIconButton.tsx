import { IconType } from "react-icons";

interface MediaIconButtonProps {
    href: string;
    icon: IconType | JSX.Element;
}

export function MediaIconButton({ href, icon }: MediaIconButtonProps) {
    const Icon = icon;
    return (
        <a className="inline-flex justify-center items-center size-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800" href={href}>
            {typeof Icon === "function" ? <Icon  className="size-6" /> : Icon}
        </a>
    );
}
