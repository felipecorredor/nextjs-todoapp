import React from "react";
import clsx from "clsx";

type ReactButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonPropTypes extends ReactButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonPropTypes> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button className={clsx(" px-2 rounded-md h-9 w-24", className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
