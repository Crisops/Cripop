import { IconFilter } from './Icons'
import FilterItem from './FilterItem'
import { optionsPopularity} from '@/types/Filters'
import { optionsRate} from '@/types/Filters'
import { optionsGenders } from '@/types/Filters'

const Filters = () => {

  return (

    <form className='relative'>
      <div className='flex flex-wrap flex-grow gap-10 items-center justify-center'>
        <FilterItem iconFilter={<IconFilter />} typeFilter='Rate' options={optionsRate} select="vote_average"/>
        <FilterItem iconFilter={<IconFilter />} typeFilter='Popularidad' options={optionsPopularity} select="sort_by"/>
        <FilterItem iconFilter={<IconFilter />} typeFilter='Género' options={optionsGenders} select="with_genres"/>
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
