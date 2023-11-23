import { type Filters} from '@/types/Filters'

const FilterItem: React.FC<Filters> = ({ iconFilter, typeFilter, options, select }) => {
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
                <option value={valueOption}>{valueText}</option>
              ))
            }
        </select>
      </div>
    </div>
  )
}

export default FilterItem
