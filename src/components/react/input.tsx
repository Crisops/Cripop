import { forwardRef } from "react";
import { Input as InputHero, type InputProps } from "@heroui/input";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <InputHero
      {...props}
      ref={ref}
      classNames={{
        inputWrapper: [
          "bg-zinc-900 group-data-[focus=true]:bg-zinc-900 data-[hover=true]:bg-zinc-900 group-data-[invalid=true]:!bg-red-500/10 group-data-[invalid=true]:data-[hover=true]:!bg-red-500/15",
        ],
        label: ["text-neutral-500"],
        input: [
          "group-data-[has-value=true]:text-white group-data-[invalid=true]:placeholder:!text-danger",
        ],
        description: ["text-neutral-700"],
        helperWrapper: ["max-w-md"],
        clearButton: ["text-white"],
      }}
    />
  );
});

Input.displayName = "Input";

export default Input;
