

type ErrorFetch = {
  statusCode: number,
  message: string
}

export const getResultSearch = async (token: string, url: string) => {

  try {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}` 
      }
    }
    
    const res = await fetch(url, options)

    if(!res.ok) throw {statusCode: res.status, message: res.statusText || "Hubo un error en la solicitud" } as ErrorFetch

    const result = await res.json()


    return result


  } catch (error) {
    console.log(error);
    
  }




}
 
