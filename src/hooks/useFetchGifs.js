import {useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (cat) => {
    const [state, setstate] = useState({

        data:[],
        cargando:true,
    });

    useEffect (()=>{
        getGifs(cat)
        .then(imgs=>{
            setTimeout(() => {
                setstate({
                    data:imgs,
                    cargando:false,
                })
            }, 3000);
            
        })
    }, [cat])


   
    
    return state;
}
