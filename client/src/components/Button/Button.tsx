import React from 'react';

type ButtonVariant = "primary" | "secondary" | "plain";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: ButtonVariant;
   size?: ButtonSize;
   rounded?: boolean;
   shadow?: boolean;
   color?: string;
   border?: boolean;
}

const Button: React.FC<ButtonProps> = ({
   variant = "plain",
   size = "medium",
   rounded = false,
   shadow = false,
   color = "",
   border = false,
   onClick,
   children,
   ...rest
}) => {
   const baseClasses =
      "inline-flex items-center justify-center font-medium focus:outline-none transition";

   const variantClasses = {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
      plain: "bg-transparent text-blue-500 hover:bg-gray-100",
   }[variant];

   const sizeClasses = {
      small: "px-4 py-1 text-sm",
      medium: "px-6 py-2 text-base",
      large: "px-8 py-3 text-lg",
   }[size];

   const roundedClass = rounded ? "rounded-full" : "rounded-md";
   const shadowClass = shadow ? "shadow-md" : "";
   const customColorClass = color
      ? `bg-${color}-500 text-white hover:bg-${color}-600`
      : "";
   const borderClass = border ? "border border-black" : "";

   return (
      <button
         onClick={onClick}
         className={`${baseClasses} ${variantClasses} ${sizeClasses} ${roundedClass} ${shadowClass} ${customColorClass} ${borderClass}`}
         {...rest}
      >
         {children}
      </button>
   );
};

export default Button;
