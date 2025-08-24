import { useCallback, useState } from 'react'
import { navigate } from 'astro:transitions/client'
import { Search } from 'lucide-react'
import { Navbar as NavbarHero, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar'
import { Link } from '@heroui/link'
import { GitHub } from '@/icons/icons'
import FormSearch from '@/components/react/form-search'
import Button from '@/components/shared/button'
import Modal from '@/components/shared/modal'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpenModal = useCallback(
    (isOpen: boolean) => {
      setIsOpen(isOpen)
    },
    [isOpen, setIsOpen],
  )

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <>
      <NavbarHero position="sticky" className="z-50 h-16 bg-black/50 backdrop-blur-sm [&>header]:max-w-full">
        <NavbarBrand>
          <Link onPress={handleNavigate} className="text-large cursor-pointer font-bold text-white">
            cripop
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end" className="gap-0">
          <NavbarItem>
            <Button
              onPress={() => handleOpenModal(true)}
              startContent={<Search className="hidden md:block" color="white" size={20} />}
              className="w-max min-w-max bg-transparent text-white"
            >
              <div className="flex md:hidden">
                <Search color="white" size={20} />
              </div>
              <span className="hidden text-current md:inline">Buscar</span>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Crisops/Cripop"
              startContent={<GitHub className="hidden size-5 fill-white md:block" />}
              className="w-max min-w-max bg-transparent text-white"
            >
              <div className="flex md:hidden">
                <GitHub className="size-5 fill-white" />
              </div>
              <span className="hidden text-current md:inline">GitHub</span>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarHero>
      <Modal isOpen={isOpen} onOpenChange={handleOpenModal} size="full" placement="center">
        <FormSearch iconSearch={<Search color="white" size={20} />} />
      </Modal>
    </>
  )
}

export default Navbar
