import type { FilterOption, Languages } from '@/types/filter-options'
import { Select as SelectHero, SelectItem, type SelectProps } from '@heroui/select'
import { Avatar } from '@heroui/avatar'

interface Props extends Omit<SelectProps, 'children'> {
  items: Languages[] | FilterOption[]
}

const Select = ({ items, ...props }: Props) => {
  return (
    <SelectHero
      {...props}
      radius="sm"
      fullWidth={false}
      classNames={{
        base: ['w-full'],
        label: ['text-white group-data-[filled=true]:text-white'],
        trigger:
          'bg-zinc-700 group-data-[focus=true]:bg-zinc-700 data-[hover=true]:bg-zinc-700/90 group-data-[invalid=true]:!bg-red-500/10 group-data-[invalid=true]:data-[hover=true]:!bg-red-500/15',
        value: ['group-data-[has-value=true]:text-white'],
        selectorIcon: ['text-white group-data-[invalid=true]:text-danger'],
      }}
      listboxProps={{
        itemClasses: {
          base: [
            'rounded-md',
            'text-white',
            'transition-opacity',
            'data-[hover=true]:bg-zinc-800',
            'data-[selectable=true]:focus:bg-zinc-800',
            'data-[pressed=true]:opacity-70',
            'data-[selectable=true]:focus:text-white',
          ],
        },
      }}
      popoverProps={{
        placement: 'bottom-start',
        classNames: {
          content: 'p-0 border-small border-divider bg-zinc-700',
        },
      }}
    >
      {items.map((item) => (
        <SelectItem
          key={item.key}
          startContent={'src' in item ? <Avatar alt={item.label} className="h-6 w-6" src={item.src} /> : null}
        >
          {item.label}
        </SelectItem>
      ))}
    </SelectHero>
  )
}

export default Select
