export const getGifs= async(cat)=>{
    
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(cat)}&limit=6&api_key=mkjv492kRXEoQ4bd59PZfIfiMYelNh9o`
    const respuesta=await fetch(url);
    const {data}= await respuesta.json();

    const gifs=data.map(img=>{
        return {
            id: img.id,
            tittle:img.title,
            url: img.images?.downsized_medium.url

        }
    })
    return gifs;
}