interface DividerProps {
    orientation?: "vertical" | "horizontal";
    className?: string;
}

export default function Divider({ orientation = "vertical", className="" }: DividerProps) {
    const dividerClass = orientation === "vertical" ? "h-1/2 w-px " : "w-1/2 h-px";
    
    return (
        <div className={`bg-zinc-400 ${dividerClass} ${className}`} />
    );
}
