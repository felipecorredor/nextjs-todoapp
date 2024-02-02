import React from "react";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface TextFieldPropTypes extends TextFieldProps {
  label: string;
  placeholder: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldPropTypes>(
  ({ label, type, ...rest }, ref) => {
    return (
      <div className="space-y-1">
        <label htmlFor={label} className="capitalize">
          {label}
        </label>
        <input
          type={type}
          className="p-2 rounded-md border placeholder-gray-500 border-white bg-transparent w-full"
          id={label}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
