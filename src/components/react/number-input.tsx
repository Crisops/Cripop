import { NumberInput as NumberInputHero, type NumberInputProps } from '@heroui/number-input'

interface Props extends NumberInputProps {}

const NumberInput = (props: Props) => {
  return (
    <NumberInputHero
      {...props}
      classNames={{
        inputWrapper: [
          'bg-zinc-700 data-[hover=true]:bg-zinc-700/90 data-[focus=true]:bg-zinc-700 group-data-[invalid=true]:!bg-red-500/10 group-data-[invalid=true]:data-[hover=true]:!bg-red-500/15',
        ],
        label: ['text-white group-data-[filled-within=true]:text-white'],
        input: ['group-data-[has-value=true]:text-white'],
        description: ['text-tiny text-neutral-500'],
        stepperButton: ['text-default-400'],
      }}
      radius="sm"
      maxValue={100}
      description="El valor debe de ser menor o igual a 100"
    />
  )
}

export default NumberInput
