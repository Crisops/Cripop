import type { DetailsSeason } from '@/types/data-season'
import { tmdbUrls } from '@/services/tmdb/urls'

interface EpisodeProps {
  episode: DetailsSeason['episodes'][number]
}

const Episode = ({ episode }: EpisodeProps) => {
  const urlPoster = tmdbUrls.images.w92
  const episodeName = episode.name?.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]/g, '').replace(/\s+/g, '-')

  return (
    <article className="relative h-auto w-full px-2 py-1 hover:bg-[#000112] xl:hover:bg-black/40">
      <a
        href={`/tv/series/${episode.show_id}/season/${episode.season_number}/episode/${episode.episode_number}/${episodeName}`}
        className="relative flex items-center gap-4 hover:bg-black/20"
      >
        <span className="text-xs font-medium text-gray-600">{episode.episode_number}</span>
        {episode.still_path && (
          <img
            className="aspect-square w-10 rounded-md object-cover"
            src={`${urlPoster}${episode.still_path}`}
            width={92}
            height={92}
            alt={episodeName || 'Sin descripción'}
          />
        )}
        <div className="flex flex-auto flex-col">
          <h4 className="text-base font-semibold text-white">{episode.name || ''}</h4>
          <span className="text-tiny text-foreground-500 line-clamp-2 max-w-xs">
            {episode.overview || `Este capitulo se emitira el ${episode.air_date}`}
          </span>
        </div>
      </a>
    </article>
  )
}

export default Episode
