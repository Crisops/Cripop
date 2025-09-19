import { DatePicker as DatePickerHeroui, type DatePickerProps } from '@heroui/date-picker'

interface Props extends DatePickerProps {}

const DatePicker = (props: Props) => {
  return (
    <DatePickerHeroui
      radius="sm"
      {...props}
      classNames={{
        base: ['after:bg-zinc-700'],
        inputWrapper: [
          'bg-zinc-700 focus-within:hover:bg-zinc-700 hover:bg-zinc-700/90 group-data-[invalid=true]:!bg-red-500/10 group-data-[invalid=true]:data-[hover=true]:!bg-red-500/15',
        ],
        label: ['text-white'],
        input: ['text-white'],
        description: ['text-tiny text-neutral-500'],
        segment: [
          'focus:bg-zinc-700/20 data-[editable=true]:text-white data-[editable=true]:focus:text-gray-500 data-[editable=true]:data-[placeholder=true]:text-neutral-400 data-[invalid=true]:data-[editable=true]:data-[placeholder=true]:text-danger',
        ],
        selectorButton: ['data-[hover=true]:bg-default/10'],
      }}
      calendarProps={{
        classNames: {
          base: ['bg-zinc-700'],
          headerWrapper: ['bg-zinc-700 after:bg-zinc-700'],
          header: ['bg-zinc-500 text-default-100'],
          title: ['text-default-100 text-tiny'],
          gridHeader: ['bg-zinc-700 text-default-100'],
          cellButton: [
            'text-foreground-100 data-[disabled=true]:text-default-400 data-[hover=true]:bg-zinc-800 data-[hover=true]:text-primary-foreground data-[selected=true]:bg-zinc-800 data-[selected=true]:text-primary-foreground data-[selected=true]:data-[hover=true]:bg-zinc-800/70 data-[selected=true]:data-[hover=true]:text-primary-foreground',
          ],
          pickerHighlight: ['bg-zinc-800'],
          pickerItem: ['text-white'],
        },
      }}
      showMonthAndYearPickers
      variant="flat"
    />
  )
}

export default DatePicker
