import React from "react";
import { Input } from "@nextui-org/react";
import { cn } from "@/shared/utils/functions";

interface InputFormProps {
  heading?: string;
  className?: string;
  icon?: JSX.Element | React.ReactNode;
  children?: React.ReactNode;
}
const InputForm: React.FC<InputFormProps> = ({
  heading,
  className,
  icon,
  children,
}: InputFormProps) => {
  return (
    <form className={cn("flex flex-col", className)}>
      <h1 className="subpixel-antialiased font-semibold text-gray-700 self-start">
        {heading}
      </h1>
      <div className="flex items-baseline">
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          labelPlacement="outside"
          endContent={icon}
        />
        {children}
      </div>
    </form>
  );
};
export default InputForm;
