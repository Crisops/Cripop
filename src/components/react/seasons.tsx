import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import type { DetailsSeason } from '@/types/data-season'
import { type AccordionProps, Accordion, AccordionItem } from '@heroui/accordion'
import { ScrollShadow } from '@heroui/scroll-shadow'
import { useStore } from '@/hooks/use-store'
import Episode from '@/components/react/episode'

interface SeasonsProps extends Omit<AccordionProps, 'children'> {
  details: DetailsSeason[]
}

const Seasons = ({ details, ...props }: SeasonsProps) => {
  const { isViewSeasons, setIsViewSeasons } = useStore(
    useShallow((state) => {
      return {
        isViewSeasons: state.isViewSeasons,
        setIsViewSeasons: state.setIsViewSeasons,
      }
    }),
  )
  if (!details) return null

  useEffect(() => {
    setIsViewSeasons(false)
  }, [])

  return (
    <ScrollShadow
      className={`transition-size duration-500 ${isViewSeasons ? 'h-[550px] w-full max-w-xl xl:w-[500px]' : 'h-1 w-0 xl:h-[550px]'} `}
      hideScrollBar
    >
      <Accordion {...props}>
        {details.map((detail) => (
          <AccordionItem
            key={detail.id}
            title={detail.name}
            subtitle={detail.overview !== '' ? detail.overview : 'Sin descripción'}
          >
            {detail.episodes.map((episode) => {
              return <Episode key={episode.id} episode={episode} />
            })}
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollShadow>
  )
}

export default Seasons
