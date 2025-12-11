import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'completed' | 'default' | 'purple';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    icon?: React.ReactNode;
    fullWidth?: boolean;
    children: React.ReactNode;
    asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary', size = 'md',
    isLoading = false, icon, fullWidth = false,
    children, className, disabled, asChild = false,
    ...props }) => {
    // Base classes
    const baseClasses = 'font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';

    // Size classes
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    // Variant classes
    const variantClasses = {
        primary: 'bg-blue-300 hover:bg-blue-700 hover:text-white focus:ring-blue-500',
        purple: 'bg-purple-800 hover:bg-purple-900 text-white focus:ring-purple-500',
        secondary: 'bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-400',
        outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
        danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
        success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
        completed: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
        default: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    };

    const hasCustomColors =
        className ? /(bg-|text-|border-)/.test(className) : false;

    // Disabled classes
    const disabledClasses = 'opacity-50 cursor-not-allowed';

    // Loading classes
    const loadingClasses = 'relative';

    // Full width classes
    const widthClasses = fullWidth ? 'w-full' : '';

    const computedClasses = `
    ${baseClasses} 
    ${sizeClasses[size]} 
    ${hasCustomColors ? '' : variantClasses[variant]}
    ${disabled || isLoading ? disabledClasses : ''}
    ${isLoading ? loadingClasses : ''}
    ${widthClasses}
    ${className || ''}  `;

    return (
        <button
            className={computedClasses}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </span>
            )}
            <span className={isLoading ? 'opacity-0' : 'flex items-center gap-2'}>
                {icon && <span className="mr-2">{icon}</span>}
                {children}
            </span>
        </button>
    );
};

export { Button };
export default Button;