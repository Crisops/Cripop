import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { Undo2 } from 'lucide-react'
import Button from '@/components/shared/button'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface TrailerProps {
  id: string | undefined
  title: string | undefined
  onBack: (isOpen: boolean) => void
}

const Trailer = ({ id, title, onBack }: TrailerProps) => {
  const handleCloseModal = () => {
    onBack(false)
  }

  return (
    <div className="h-full w-full">
      <section className="flex h-full w-full items-center justify-center">
        <div className="flex-inital flex flex-col gap-2">
          <Button
            onPress={handleCloseModal}
            variant="solid"
            radius="sm"
            size="md"
            startContent={<Undo2 className="size-3 sm:size-4" />}
            className="border-small sm:text-small text-tiny w-max border-black bg-white font-medium text-black"
          >
            Regresar
          </Button>
          <div className="border-small aspect-video h-auto w-80 border-zinc-700 bg-black text-white min-[500px]:w-[450px] md:w-[630px] xl:w-[900px]">
            {id && title ? (
              <LiteYouTubeEmbed playlist={false} id={id} title={title} webp />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-tiny sm:text-small md:text-medium text-white">
                  Lo siento. No se encontró ningún trailer
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Trailer
