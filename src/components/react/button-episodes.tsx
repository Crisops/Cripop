import type { ButtonProps } from '@heroui/button'
import { useShallow } from 'zustand/react/shallow'
import { Layers } from 'lucide-react'
import { useStore } from '@/hooks/use-store'
import { cn } from '@/utils/tailwind-merge'
import Button from '@/components/shared/button'

const ButtonEpisodes = ({ className, ...props }: ButtonProps) => {
  const { isViewEpisodes, setIsViewEpisodes } = useStore(
    useShallow((state) => {
      return {
        isViewEpisodes: state.isViewEpisodes,
        setIsViewEpisodes: state.setIsViewEpisodes,
      }
    }),
  )

  const handleViewEpisodes = () => {
    setIsViewEpisodes(!isViewEpisodes)
  }

  return (
    <Button
      {...props}
      onPress={handleViewEpisodes}
      variant="solid"
      radius="sm"
      size="md"
      startContent={<Layers className="size-4" />}
      className={cn('border-small text-small bg-white font-medium text-black', className)}
    >
      {!isViewEpisodes ? 'Ver más episodios' : 'Cerrar'}
    </Button>
  )
}

export default ButtonEpisodes
