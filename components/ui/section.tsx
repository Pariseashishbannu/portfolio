import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
}

export function Section({ className, children, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-24 md:py-32 w-full will-change-transform", className)}
            {...props}
        >
            {children}
        </section>
    );
}
