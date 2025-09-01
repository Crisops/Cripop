import { useState } from 'react'
import { Play } from 'lucide-react'
import type { ButtonProps } from '@heroui/button'
import { cn } from '@/utils/tailwind-merge'
import Button from '@/components/shared/button'
import Modal from '@/components/shared/modal'
import Trailer from '@/components/react/trailer'

interface ButtonTrailerProps {
  id: string | undefined
  title: string | undefined
  className?: ButtonProps['className']
}

const ButtonTrailer = ({ id, title, className }: ButtonTrailerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  return (
    <>
      <Button
        variant="ghost"
        radius="sm"
        size="md"
        onPress={() => handleOpenModal(true)}
        startContent={<Play className="size-4" />}
        className={cn(
          'border-small text-small border-zinc-500 font-medium text-white data-[hover=true]:!border-white data-[hover=true]:!bg-white data-[hover=true]:!text-black',
          className,
        )}
      >
        Ver trailer
      </Button>
      <Modal size="full" placement="center" isOpen={isOpen} onOpenChange={handleOpenModal}>
        <Trailer id={id} title={title} onBack={handleOpenModal} />
      </Modal>
    </>
  )
}

export default ButtonTrailer
