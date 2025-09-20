import { Menu, Search } from 'lucide-react'
import { NavbarContent as NavbarContentHero, NavbarItem, NavbarMenuToggle } from '@heroui/navbar'
import { menuLinks } from '@/types/links'
import Tooltip from '@/components/react/tooltip'
import Button from '@/components/shared/button'
import { Link } from '@heroui/link'

interface NavbarContentProps {
  handleNavigate: (href: string) => void
  handleOpenModal: (isOpen: boolean) => void
  isMenuOpen: boolean
}

const NavbarContent = ({ handleNavigate, handleOpenModal, isMenuOpen }: NavbarContentProps) => {
  return (
    <NavbarContentHero justify="end" className="gap-4 sm:gap-0">
      <NavbarItem className="hidden sm:list-item">
        <Button onPress={() => handleNavigate('/')} className="w-max min-w-max bg-transparent text-white">
          Inicio
        </Button>
      </NavbarItem>
      {menuLinks.map((item) => (
        <NavbarItem key={item.id} className="hidden sm:list-item">
          <Tooltip buttonText={item.label}>
            <div className="flex flex-col gap-2">
              {item.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.label}
                  onPress={() => handleNavigate(subcategory.href)}
                  className="text-tiny text-foreground-500 cursor-pointer hover:text-white"
                >
                  {subcategory.label}
                </Link>
              ))}
            </div>
          </Tooltip>
        </NavbarItem>
      ))}
      <NavbarItem>
        <NavbarMenuToggle
          icon={<Menu color="white" />}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarItem>
      <NavbarItem>
        <Button
          onPress={() => handleOpenModal(true)}
          endContent={<Search className="hidden md:block" color="white" size={20} />}
          className="w-max min-w-max bg-transparent px-0 text-white xl:px-4"
        >
          <div className="flex md:hidden">
            <Search color="white" size={20} />
          </div>
          <span className="hidden text-current md:inline">Buscar</span>
        </Button>
      </NavbarItem>
    </NavbarContentHero>
  )
}

export default NavbarContent
