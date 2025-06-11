import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import * as React from "react";

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme()

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            style={
                {
                    "--normal-bg": "var(--color-popover)",
                    "--normal-text": "var(--color-popover-foreground)",
                    "--normal-border": "var(--color-border)",
                    "--success-bg": "var(--color-card)",
                    "--success-text": "var(--color-card-foreground)",
                    "--error-bg": "var(--color-destructive)",
                    "--error-text": "var(--color-destructive-foreground)",
                } as React.CSSProperties
            }
            {...props}
        />
    )
}

export { Toaster }