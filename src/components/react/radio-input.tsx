import type { FilterOption } from '@/types/filter-options'
import { forwardRef } from 'react'
import { RadioGroup, Radio, type RadioGroupProps, type RadioProps } from '@heroui/radio'

interface Props extends RadioGroupProps {
  items: FilterOption[]
  radioClassNames?: RadioProps['classNames']
}

const RadioInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { onValueChange, items, ...rest } = props
  const handleChange = (value: string) => {
    onValueChange?.(value)
  }

  return (
    <RadioGroup {...rest} onValueChange={handleChange} ref={ref}>
      {items.map((item) => {
        return (
          <Radio key={item.key} value={item.key} classNames={rest.radioClassNames}>
            {item.label}
          </Radio>
        )
      })}
    </RadioGroup>
  )
})

RadioInput.displayName = 'RadioInput'

export default RadioInput
