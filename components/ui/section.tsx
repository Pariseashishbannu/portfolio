import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
}

export function Section({ className, children, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-24 md:py-32 w-full", className)}
            {...props}
        >
            {children}
        </section>
    );
}
