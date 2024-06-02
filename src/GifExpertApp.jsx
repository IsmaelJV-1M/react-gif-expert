import { useState } from "react";
import {AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

   const [Categorias, setCategorias] = useState(['One Punch'])

  const onAddCategory = ( newCategory ) => {

    if(Categorias.includes (newCategory)) return;

    // Categorias.push(newCategory)
    setCategorias([ newCategory, ...Categorias] ); 
    // setCategorias( cat => [...cat, 'valorant'] ); 
}

  return (
    <>
        <h1>GifExpertApp</h1>
      
       <AddCategory 

          onNewCategory={ (value) => onAddCategory(value)}
       /> 

         {
           Categorias.map( ( category ) => (
                <GifGrid
                 key={category} 
                    category={category}/>
             ) )
         }
        
    </>
  )
}
