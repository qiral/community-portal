import * as react from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const Card: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardHeader: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardTitle: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLParagraphElement> & react.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardFooter: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, buttonVariants, cn };
