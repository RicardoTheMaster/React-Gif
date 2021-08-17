import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GifGridItem';



const GifGrid = ({cat}) => {
    const {data:images, cargando}=useFetchGifs(cat);     

    return (
        <>
        <h1 className="animate__animated animate__backInDown"> {cat} </h1>
        <h5 className="salida animate__animated animate__flash">{cargando && 'Cargando. . .'}</h5>
        <div className="card-grid">
         

         {
             images.map((img)=>(
             <GifGridItem 
             key={img.id}
             {...img}
             />
                 ))
         }
        
     
 </div>

        </>
    )
}



export default GifGrid;
