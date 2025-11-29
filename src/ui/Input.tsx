import * as React from "react";
import { cn } from "../utils/lib";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { type?: string }>(
    ({ className, type = "text", ...props }, ref) => {
        return (
            <input
                type={type} // Default to "text" if no type is provided
                className={cn(
                    "flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    className // Merge any custom classes passed as props
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

Input.displayName = "Input"; // Set the displayName for debugging in React DevTools

export { Input };