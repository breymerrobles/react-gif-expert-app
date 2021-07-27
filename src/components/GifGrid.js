import React, {useState,useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
export const GifGrid = ({category}) => {
    const {data:images, loading} =useFetchGifs(category);
   
   
   
    return (
        <>
         <h3  className="animate__animated animate__fadeInLeft"> { category }</h3>
         { loading && <p>Loading...</p> }
        <div className="card-grid">
           
            {
                 images.map( (img, idx) => (
                   
                      <GifGridItem key={img.id} {...img}></GifGridItem>
                      )
                )  
               }
            
        </div>
        </>
    )
}
