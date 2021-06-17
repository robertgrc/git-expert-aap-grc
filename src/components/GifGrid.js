import React, { useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs ( category )
            .then( setImages );
    }, [category])

    // getGifs es llamado ahora dentro de useEffect para que solo se ejecute una vez 
    //getGifs();

    return (
        <div>
            <h3>{ category }</h3>
            
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
        </div>
    )
}
