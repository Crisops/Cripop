import { useState } from 'react'
import { Search } from 'lucide-react'
import Button from '@/components/shared/button'
import FormSearch from '@/components/react/form-search'
import Modal from '@/components/shared/modal'

function WelcomeSearchFooter() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  return (
    <>
      <div className="flex items-start justify-center">
        <div className="flex max-w-md flex-col gap-2 lg:max-w-lg">
          <span className="text-xl font-bold text-white lg:self-start">Cripop</span>
          <p className="text-tiny text-foreground-500">
            Un espacio donde puedes ver lo que te gusta de una manera rápida, sencilla y eficaz.
          </p>
          <p className="text-tiny text-foreground-500">Busca tu serie y película favorita. ¿Te perderás alguna?</p>
          <Button
            variant="solid"
            radius="sm"
            className="flex-grow bg-white py-2 text-sm text-zinc-950 transition-colors data-[hover=true]:bg-white/50"
            onPress={() => handleOpenModal(true)}
          >
            Comenzar
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={handleOpenModal} size="full" placement="center">
        <FormSearch iconSearch={<Search color="white" size={20} />} />
      </Modal>
    </>
  )
}

export default WelcomeSearchFooter
