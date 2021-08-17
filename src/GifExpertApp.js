import React, {useState} from "react"
import { AddCategory } from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

export const GifExpertApp =(()=>{

   
  // const cats=['One Punch','Inspector','Dragon Ball']
   
   const [cats, setcat] = useState(['Dragon Ball'])
    
   /* const handleAdd=(e)=>{
        setcat(cats=>[...cats,'nuevo']);
    }


     <button onClick={handleAdd}> Agregar </button>
    */

return <>
    <h2>GifExpertApp</h2>
    <hr />
    <AddCategory setcat={setcat}/>
    <hr />

    <ol>
        {
             cats.map((cat)=>(<GifGrid
                key={cat}
                cat={cat}/>))
        }
    </ol>

    </>
})