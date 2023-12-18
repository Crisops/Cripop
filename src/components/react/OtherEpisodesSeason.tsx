
type EpisodeHero = {
  idSerie: string | undefined,
  season: number,
  episode: number,
  img_url: string,
  name: string,
  overview: string
  urlName: string
}

const OtherEpisodesSeason = ({idSerie, season, episode, img_url, name, overview, urlName}: EpisodeHero) => {
  return ( 

    <a href={`/tv/series/${idSerie}/season/${season}/episode/${episode}/${urlName}`}>
    <img id='episodeImg' className='w-full h-full object-cover transition-colors duration-200' src={img_url} alt='asas' loading='lazy' />
    <div id="episode" className='absolute p-2 flex flex-col justify-center gap-3 inset-0 bg-gradient-to-t from-[#000105] translate-y-full transition-transform duration-200 ease-in'>
      <div className='absolute flex justify-center items-center top-2 right-2 w-6 h-6 bg-zinc-500/70 rounded-sm'>
        <span className='text-zinc-100 font-medium text-sm'>{episode}</span>
      </div>
      <span className='text-base uppercase text-white font-Noto_Sans font-bold line-clamp-2'>{name}</span>
      <span className='text-xs text-zinc-400 font-Noto_Sans line-clamp-2'>{overview}</span>
    </div>
  </a>

   );
}
 
export default OtherEpisodesSeason;