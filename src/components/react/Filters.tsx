import '@/components/react/css/filters.css' // Design Scroll Bar Filters
import { IconFilter } from './Icons'
import FilterItem from './FilterItem'
import { optionsPopularity} from '@/types/Filters'
import { optionsRate} from '@/types/Filters'
import { optionsGenders } from '@/types/Filters'

const Filters = () => {

  return (

    <form className='relative w-full flex items-center top-0'>
      <div className='flex flex-grow items-center gap-5'>
        <div className='filters block py-2 w-full overflow-x-scroll'>
          <div className='flex w-0 gap-6'>
            <FilterItem iconFilter={<IconFilter />} typeFilter='Rate' options={optionsRate} select="vote_average"/>
            <FilterItem iconFilter={<IconFilter />} typeFilter='Popularidad' options={optionsPopularity} select="sort_by"/>
            <FilterItem iconFilter={<IconFilter />} typeFilter='Género' options={optionsGenders} select="with_genres"/>
          </div>
        </div>
        <button
          type='submit'
          className='px-3 py-1 text-white border border-zinc-700 font-Noto_Sans text-sm'
        >Aplicar
        </button>
      </div>
    </form>

  )
}

export default Filters