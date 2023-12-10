import { IconSearch, IconGitHub } from '@/components/react/Icons'
import { useEffect, useState } from 'react'

const Header = () => {
  const [header, setHeader] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderBlur)

    return () => {
      window.removeEventListener('scroll', handleHeaderBlur)
    }
  }, [])

  const handleHeaderBlur = (e) => {
    const { scrollTop } = document.documentElement;

    (scrollTop > 0)
      ? setHeader(true)
      : setHeader(false)
  }

  return (
    <div className='fixed top-0 left-0 w-full h-24 z-50'>
      <header className={`w-full h-full flex justify-between items-center px-5 md:px-10 ${header ? 'backdrop-blur-sm' : ''}`}>
        <a href='/'>
          <div className='relative'>
            <span id='text-title' className='text-white text-3xl md:text-4xl lg:text-5xl font-bold font-Ubuntu'>Cripop</span>
          </div>
        </a>
        <div className='relative flex justify-evenly items-center gap-8 [&>div>a]:font-Noto_Sans'>
          <div className='flex items-center justify-evenly'>
            <IconSearch />
            <a href='#' id='text-github' className='py-3 px-2 text-white hidden md:block text-base 2xl:text-lg'>Buscar</a>
          </div>
          <div className='flex items-center justify-evenly'>
            <IconGitHub />
            <a href='https://github.com/Crisops/Cripop' id='text-exitDoor' className='py-3 px-2 text-white  hidden md:block text-base 2xl:text-lg' target='_blank' rel='noreferrer'>GitHub</a>
          </div>
        </div>
      </header>
    </div>

  )
}

export default Header