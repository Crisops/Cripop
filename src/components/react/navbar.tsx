import { useCallback, useState } from 'react'
import { navigate } from 'astro:transitions/client'
import { Search } from 'lucide-react'
import { Navbar as NavbarHero, NavbarBrand } from '@heroui/navbar'
import { Link } from '@heroui/link'
import FormSearch from '@/components/react/form-search'
import Modal from '@/components/shared/modal'
import NavbarContent from '@/components/react/navbar-content'
import NavbarMenu from '@/components/react/navbar-menu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const handleOpenModal = useCallback(
    (isOpen: boolean) => {
      setIsOpen(isOpen)
    },
    [isOpen, setIsOpen],
  )

  const handleNavigate = (href: string) => {
    navigate(href)
  }

  return (
    <>
      <NavbarHero
        onMenuOpenChange={setIsMenuOpen}
        position="sticky"
        className="z-50 h-16 bg-black/50 backdrop-blur-sm [&>header]:max-w-full [&>header]:px-4"
      >
        <NavbarBrand>
          <Link onPress={() => handleNavigate('/')} className="text-large cursor-pointer font-bold text-white">
            cripop
          </Link>
        </NavbarBrand>
        <NavbarContent handleNavigate={handleNavigate} handleOpenModal={handleOpenModal} isMenuOpen={isMenuOpen} />
        <NavbarMenu handleNavigate={handleNavigate} />
      </NavbarHero>
      <Modal isOpen={isOpen} onOpenChange={handleOpenModal} size="full" placement="center">
        <FormSearch iconSearch={<Search color="white" size={20} />} />
      </Modal>
    </>
  )
}

export default Navbar
