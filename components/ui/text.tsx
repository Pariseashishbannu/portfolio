import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: "h1" | "h2" | "h3" | "body" | "caption";
}

export function Text({ className, variant = "body", children, ...props }: TextProps) {
    const variants = {
        h1: "font-display text-4xl md:text-6xl font-bold tracking-tight text-white",
        h2: "font-display text-3xl md:text-4xl font-semibold tracking-tight text-white",
        h3: "font-display text-xl md:text-2xl font-medium tracking-tight text-white",
        body: "font-sans text-base text-secondary leading-relaxed",
        caption: "font-sans text-sm text-secondary/60 uppercase tracking-widest",
    };

    const Component = variant.startsWith("h") ? (variant as any) : "p";

    return (
        <Component className={cn(variants[variant], className)} {...props}>
            {children}
        </Component>
    );
}
