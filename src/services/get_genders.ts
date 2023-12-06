
type ErrorFetch = {
  statusCode: number,
  message: string
}

export const getGendersMoviesList = async (token: string) => {

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}` 
      }
    }
    
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=es', options)

    if(!res.ok) throw {statusCode: res.status, message: res.statusText || "Hubo un error en la solicitud" } as ErrorFetch

    const genders = await res.json()


    return genders


  } catch (error) {
    console.log(error);
    
  }

}

export const getGendersSeriesList = async (token: string) => {

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}` 
      }
    }
    
    const res = await fetch('https://api.themoviedb.org/3/genre/tv/list?language=es', options)

    if(!res.ok) throw {statusCode: res.status, message: res.statusText || "Hubo un error en la solicitud" } as ErrorFetch

    const genders = await res.json()


    return genders


  } catch (error) {
    console.log(error);
    
  }

}