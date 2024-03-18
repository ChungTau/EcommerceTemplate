import {MenuIcon} from "lucide-react";
import {Button, ButtonProps} from "../ui/button";

export function MenuButton({...prop}:ButtonProps) {
    return (
        <div className="sm:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100/[0.05]" {...prop}>
                <MenuIcon className="h-4 w-4"/>
            </Button>
        </div>
    );
};