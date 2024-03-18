import {MenuIcon} from "lucide-react";
import {Button} from "../ui/button";

export default function MenuButton() {
    return (
        <div className="sm:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100/[0.05]">
                <MenuIcon className="h-4 w-4"/>
            </Button>
        </div>
    );
};