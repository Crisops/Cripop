import { tmdbUrls } from '@/services/tmdb/urls'

interface EpisodeCardProps {
  idSerie: number
  season: number
  episode: number
  imgUrl: string
  name: string
  overview: string
}

const EpisodeCard = ({ idSerie, season, episode, imgUrl, name, overview }: EpisodeCardProps) => {
  const seoName = name.replace(/\s/g, '-').replace(/[.()]/g, '')

  return (
    <a href={`/tv/series/${idSerie}/season/${season}/episode/${episode}/${seoName}`}>
      <img
        className="h-full w-full object-cover transition-colors duration-200 group-[.swiper-slide-active]:brightness-125"
        src={`${tmdbUrls.images.w300}${imgUrl}`}
        alt="asas"
        loading="lazy"
      />
      <div className="transition-transform-opacity absolute inset-0 flex translate-y-full flex-col justify-center gap-3 bg-gradient-to-t from-[#000105] p-2 opacity-0 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100">
        <div className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-sm bg-zinc-500/70">
          <span className="text-sm font-medium text-zinc-100">{episode}</span>
        </div>
        <span className="line-clamp-2 text-base font-bold text-white uppercase">{name}</span>
        <span className="line-clamp-2 text-xs text-zinc-400">{overview}</span>
      </div>
    </a>
  )
}

export default EpisodeCard
