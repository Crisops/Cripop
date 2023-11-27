import { type Filters} from '@/types/Filters'
import { useId } from 'react'

const FilterItem: React.FC<Filters> = ({ iconFilter, typeFilter, options, select }) => {
  const optionId = useId()
  return (
    <div className='flex items-center gap-2'>
      <div className='flex items-center gap-2'>
        {iconFilter}
        <span className='font-Libre_Franklin text-sm text-white'>{typeFilter}</span>
      </div>
      <div>
        <select className='outline-none px-4 bg-transparent border-b border-zinc-600 text-white cursor-pointer [&>option]:bg-[#000105]'
         name={select}
          id='rate'>
            {
              options.map(({valueOption, valueText}) => (
                <option key={optionId} value={valueOption}>{valueText}</option>
              ))
            }
        </select>
      </div>
    </div>
  )
}

export default FilterItem
