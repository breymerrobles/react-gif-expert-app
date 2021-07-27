import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {
   // const categoties = ['One Punch', 'Samurai x', 'Dragon Ball'];
   const [categories,setCategories] = useState(['One Punch']);
   
   return(
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
           
            <hr />
           
           <ol>
               {
                 categories.map( (cat, idx) => (
                     <GifGrid category={ cat } key={'category'+idx} ></GifGrid>
                     // <li key={'category'+idx}>{cat}</li>
                      )
                )  
               }
              
           </ol>
        </>
    )
}
  