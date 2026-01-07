import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                "max-w-7xl mx-auto px-6 md:px-12 w-full",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
