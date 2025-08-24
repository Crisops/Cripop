import { forwardRef } from "react";
import { RadioGroup, Radio, type RadioGroupProps } from "@heroui/radio";

const RadioInput = forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const { onValueChange, ...rest } = props;
  const handleChange = (value: string) => {
    onValueChange?.(value);
  };

  return (
    <RadioGroup
      {...rest}
      onValueChange={handleChange}
      ref={ref}
      classNames={{
        wrapper: "gap-10 flex-nowrap",
      }}
    >
      <Radio
        classNames={{
          base: "text-neutral-700 w-full max-w-full grow lg:grow-0 lg:max-w-max px-3 py-2 bg-transparent border border-zinc-900 rounded-small",
          label:
            "text-neutral-800 group-data-[selected=true]:text-white group-data-[hover=true]:text-neutral-700 text-small",
          wrapper: "group-data-[selected=true]:border-white border-zinc-900",
          control: "bg-white",
        }}
        value="movie"
      >
        Películas
      </Radio>
      <Radio
        classNames={{
          base: "text-neutral-700 w-full max-w-full grow lg:grow-0 lg:max-w-max px-3 py-2 bg-transparent border border-zinc-900 rounded-small",
          label:
            "text-neutral-800 group-data-[selected=true]:text-white group-data-[hover=true]:text-neutral-700 text-small",
          wrapper: "group-data-[selected=true]:border-white border-zinc-900",
          control: "bg-white",
        }}
        value="tv"
      >
        Series
      </Radio>
    </RadioGroup>
  );
});

RadioInput.displayName = "RadioInput";

export default RadioInput;
