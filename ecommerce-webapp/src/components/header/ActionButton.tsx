import { ChildrenProps } from "@/types/childrenProps";
import { Button, ButtonProps } from "../ui/button"; // Import ButtonProps

export function ActionButton({ children, ...props }: ChildrenProps & ButtonProps) {
    return (
        <Button
            {...props}
            variant="ghost"
            size="icon"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-none transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 hover:dark:bg-gray-100/[0.1] hover:text-accent-foreground h-10 w-10"
        >
            {children}
        </Button>
    );
};
