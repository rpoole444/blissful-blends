export const apiCalls = {
  getAllStrains(){
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY || '' ,
      'X-RapidAPI-Host': 'weed-strain1.p.rapidapi.com'
    }
  };
  
   return fetch(`${process.env.REACT_APP_API_BASE_URL}/?ordering=-strain`, options)
    .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return new Error("Trouble fetching All Strains")
                }

          })
}
}
