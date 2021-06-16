import React, { useEffect, useState } from 'react'

export const GifGrid = ({category}) => {


    const [counter, setCounter] = useState(0);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() =>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=Mario+rabits&limit=15&api_key=X77MmMQIz0l6z16KtwVhHEQTdsWMbHuV'
        const resp = await fetch (url);
        const {data} = await resp.json();

        const gifs = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
    }
    // getGifs es llamado ahora dentro de useEffect para que solo se ejecute una vez 
    //getGifs();

    return (
        <div>
            <h3>{category}</h3>
            <h3>{counter}</h3>
            <button onClick={()=>setCounter(counter+1)}></button>
        </div>
    )
}
