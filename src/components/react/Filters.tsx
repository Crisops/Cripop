import { IconFilter } from './Icons'
import FilterItem from './FilterItem'
import { optionsPopularity} from '@/types/Filters'
import { optionsRate} from '@/types/Filters'
import { optionsGenders } from '@/types/Filters'

const Filters = () => {

  return (

    <form className='relative flex-grow'>
      <div className='flex flex-wrap flex-grow gap-10 items-center justify-center'>
        <FilterItem iconFilter={<IconFilter />} typeFilter='Rate' options={optionsRate} select="vote_average"/>
        <FilterItem iconFilter={<IconFilter />} typeFilter='Popularidad' options={optionsPopularity} select="sort_by"/>
        <FilterItem iconFilter={<IconFilter />} typeFilter='Género' options={optionsGenders} select="with_genres"/>
        <button
          type='submit'
          className='px-3 py-2 flex-grow text-white border border-zinc-700 font-Noto_Sans text-sm transition-colors duration-300 hover:bg-white hover:text-black'
        >Aplicar
        </button>
      </div>
    </form>

  )
}

export default Filters
