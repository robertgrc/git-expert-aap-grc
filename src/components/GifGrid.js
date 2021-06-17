import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    // const [images, setImages] = useState([])

    const { loading } = useFetchGifs();

    console.log(loading);
    
    // useEffect(() => {
    //     getGifs ( category )
    //         .then( setImages );
    // }, [category])

    // getGifs es llamado ahora dentro de useEffect para que solo se ejecute una vez 
    //getGifs();

    return (
        <div>
            <h3>{ category }</h3>
            {loading ? 'Cargando': 'data cargada'}
            {/*             
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
             */}
        </div>
    )
}
