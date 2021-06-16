import React, { useState } from 'react'

export const GifExpertApp = () => {

    //const categories = ["dragonball", "onepunch", "invincible"];

const [categories, setCategories] = useState(["dragonball", "onepunch", "invincible"])

const handleAdd = () => {

    //setCategories([...categories, "El padrino"]);
    setCategories( cats=>[...cats, 'DeadCells']);
}


    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                {
                    categories.map( category =>{
                        return<li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}
