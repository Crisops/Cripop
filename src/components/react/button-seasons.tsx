import { Layers } from 'lucide-react'
import type { ButtonProps } from '@heroui/button'
import { useShallow } from 'zustand/react/shallow'
import { useStore } from '@/hooks/use-store'
import { cn } from '@/utils/tailwind-merge'
import Button from '@/components/shared/button'

interface Props {
  className?: ButtonProps['className']
}

const ButtonSeasons = ({ className }: Props) => {
  const { isViewSeasons, setIsViewSeasons } = useStore(
    useShallow((state) => {
      return {
        isViewSeasons: state.isViewSeasons,
        setIsViewSeasons: state.setIsViewSeasons,
      }
    }),
  )

  const handleViewSeasons = () => {
    setIsViewSeasons(!isViewSeasons)
  }

  return (
    <Button
      variant="solid"
      radius="sm"
      size="md"
      startContent={<Layers className="size-4" />}
      className={cn('border-small text-small bg-white font-medium text-black', className)}
      onPress={handleViewSeasons}
    >
      {!isViewSeasons ? 'Temporadas' : 'Cerrar'}
    </Button>
  )
}

export default ButtonSeasons
