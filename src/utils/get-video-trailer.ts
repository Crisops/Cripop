import type { Videos } from '@/types/videos'

export const getVideoTrailer = (videos: Videos | null): Videos['results'][number] | null => {
  if (!videos?.results?.length || !videos) return null

  const trailers = videos.results

  const patterns = [
    /tr[aá]iler\s+oficial\s+en\s+castellano/i,
    /tr[aá]iler\s+oficial.*(?:castellano|español)/i,
    /tr[aá]iler.*castellano/i,
    /^tr[aá]iler\s+oficial(?!\s*\[)(?!.*vose)(?!.*subt)/i,
    /^official\s+trailer(?!\s*\[)(?!.*vose)/i,
    /(?:tr[aá]iler|trailer)\s+oficial/i,
    /oficial\s+(?:tr[aá]iler|trailer)/i,
    /^(?:tr[aá]iler|trailer)(?:\s|$)/i,
    /(?:tr[aá]iler|trailer)/i,
  ]

  for (const pattern of patterns) {
    const trailer = trailers.find((video) => pattern.test(video.name))
    if (trailer) return trailer
  }
  return trailers.find((video) => video.type === 'Trailer' || video.type === 'Clip') || trailers[0]
}
