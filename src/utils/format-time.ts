export function formatTime(timeInMinutes: number): string {
  if (!timeInMinutes || timeInMinutes <= 0) {
    return ''
  }

  const adjustedTime = Math.floor(timeInMinutes) - 1

  if (adjustedTime <= 0) {
    return ''
  }
  if (adjustedTime < 60) {
    return `${adjustedTime} minutos`
  }

  const hours = Math.floor(adjustedTime / 60)
  const remainingMinutes = adjustedTime % 60

  if (hours === 1 && remainingMinutes === 0) {
    return '1 hora'
  }

  if (hours === 1) {
    return `1 hora ${remainingMinutes} minutos`
  }

  if (remainingMinutes === 0) {
    return `${hours} horas`
  }

  return `${hours} horas ${remainingMinutes.toString().padStart(2, '0')} minutos`
}
