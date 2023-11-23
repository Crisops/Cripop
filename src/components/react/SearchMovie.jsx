import { IconSearch } from './Icons'

const SearchMovie = () => {
  return (
    <form className='relative'>
      <div className='relative flex items-center gap-4'>
        <IconSearch />
        <div className='relative flex items-center w-56 max-[1320px]:w-54 py-4 border-b border-zinc-600'>
          <input
            className='absolute w-full h-full outline-none text-white font-Noto_Sans text-sm bg-transparent px-1 placeholder:text-zinc-300 placeholder:font-Libre_Franklin placeholder:text-sm'
            id='search'
            type='text'
            placeholder='Buscar'
          />
        </div>
        <button
          type='submit'
          className='px-3 py-1 text-white border border-zinc-700 font-Noto_Sans text-sm'
        >Buscar
        </button>
      </div>
    </form>
  )
}

export default SearchMovie
