import { NavbarMenu as NavbarMenuHero, NavbarMenuItem } from '@heroui/navbar'
import { menuLinks } from '@/types/links'
import { Link } from '@heroui/link'
import { Accordion, AccordionItem } from '@heroui/accordion'
import { Divider } from '@heroui/divider'

interface NavbarMenuProps {
  handleNavigate: (href: string) => void
}

const NavbarMenu = ({ handleNavigate }: NavbarMenuProps) => {
  return (
    <NavbarMenuHero className="gap-0 bg-black/80 p-0 backdrop-blur-sm [&>div]:px-0">
      <NavbarMenuItem className="bg-black/50 px-3 py-4">
        <Link onPress={() => handleNavigate('/')} className="text-medium cursor-pointer text-white">
          Inicio
        </Link>
      </NavbarMenuItem>
      <Divider className="bg-foreground-800" />
      <Accordion
        dividerProps={{
          className: 'bg-foreground-800',
        }}
        itemClasses={{
          title: 'text-medium text-white',
          base: 'bg-black/50',
          heading: 'px-3',
        }}
      >
        {menuLinks.map((item) => (
          <AccordionItem key={item.id} aria-label={`Accordion ${item.label}`} title={item.label}>
            <div className="animate-in slide-in-from-top-1 border-foreground-500 ml-4 border-l-2 duration-200">
              {item.subcategories.map((subcategory) => (
                <div
                  key={subcategory.id}
                  className="before:bg-foreground-500 relative flex items-center px-4 py-2 before:absolute before:top-1/2 before:left-0 before:h-px before:w-3"
                >
                  <Link
                    onPress={() => handleNavigate(subcategory.href)}
                    className="text-small cursor-pointer text-white"
                  >
                    {subcategory.label}
                  </Link>
                </div>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </NavbarMenuHero>
  )
}

export default NavbarMenu
