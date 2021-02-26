import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


const GifterApp = () => {
   const [categories, setCategories] = useState(['anime'])
   
   
   //const categories = ['anime','deportes', 'videojuegos'];

/*     const handleAdd = () => {
        const newCategorie = prompt('Ingrese nueva categoria');
        setcategories(categories.concat(newCategorie))
    } */

    return (
        <>
         <h2>GifterExpertApp</h2>  
         <AddCategory setCategories = {setCategories} /> 
         <hr />
         <ol>
           { categories.map(category => (
              <GifGrid
                key = {category}
                category={category} />
           ))}
         </ol>
        </>
    )
    }
//
//https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

export default GifterApp;