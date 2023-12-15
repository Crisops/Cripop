import { validateFormData } from '@/helpers/validateFormData'
import { IconSearch } from './Icons'
import { validateForm } from '@/helpers/validateForm'

const SearchMovie = () => {
  const validateData = (formData) => {
    const error = validateFormData(formData)
    return error
  }

  const { form, error, handleChangeKeyUp, handleChange } = validateForm(validateData)

  return (
    <form className='relative flex-grow' action='/result' method='GET'>
      <div className='relative flex flex-col items-center gap-7'>
        <div className='relative flex flex-col gap-8 sm:flex-row sm:gap-4 items-center'>
          <div className='hidden sm:block'>
            <IconSearch />
          </div>
          <div className='relative flex items-center w-80 sm:w-96 h-5 py-5 border-b border-zinc-600'>
            <input
              className='absolute w-full h-full outline-none text-white font-Noto_Sans text-sm bg-transparent px-1 placeholder:text-zinc-300 placeholder:font-Libre_Franklin placeholder:text-sm'
              id='search'
              name='search'
              type='text'
              onChange={handleChange}
              onKeyUp={handleChangeKeyUp}
              placeholder='Buscar'
              value={form.search}
            />
            {
              error.search &&
                <div className='absolute -bottom-6 left-0'>
                  <span className='text-red-600 font-Noto_Sans text-xs font-semibold'>{error.search}</span>
                </div>
            }
          </div>
          <button
            type='submit'
            className={`border border-zinc-500 px-5 py-2 font-Noto_Sans text-white font-medium text-sm transition-colors duration-300 hover:bg-white hover:text-black ${(!form.search.trim() || error.search) && 'bg-red-600 cursor-not-allowed pointer-events-none hover:bg-red-800 hover:text-white border border-red-600'}`}
          >Buscar
          </button>
        </div>
        <div className='flex justify-center w-full items-center gap-4'>
          <div className='flex items-center gap-2'>
            <input
              className='hidden peer/movie'
              type='radio'
              name='choose'
              id='movie'
              value='movie'
              onChange={handleChange}
              defaultChecked
            />
            <label className='relative flex items-center gap-2 text-[#00ad76] text-sm font-Noto_Sans font-normal border border-[#00ad76] rounded-md px-3 py-2 before:content-[""] before:w-4 before:h-4 before:border-2 before:border-[#00ad76] before:rounded-full peer-checked/movie:bg-[#00ad76]/20 peer-checked/movie:before:border-white peer-checked/movie:before:w-3 peer-checked/movie:before:h-3 peer-checked/movie:text-white cursor-pointer' htmlFor='movie'>Películas</label>
          </div>
          <div className='flex items-center gap-2'>
            <input
              className='hidden peer/tv'
              type='radio'
              name='choose'
              id='series'
              onChange={handleChange}
              value='tv'
            />
            <label className='relative flex items-center gap-2 text-[#00ad76] text-sm font-Noto_Sans font-normal border border-[#00ad76] rounded-md px-3 py-2 before:content-[""] before:w-4 before:h-4 before:border-2 before:border-[#00ad76] before:rounded-full peer-checked/tv:bg-[#00ad76]/20 peer-checked/tv:before:border-white peer-checked/tv:before:w-3 peer-checked/tv:before:h-3 peer-checked/tv:text-white cursor-pointer' htmlFor='series'>Series</label>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SearchMovie
