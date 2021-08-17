import React from 'react'

const GifGridItem = ({id,tittle,url}) => {
    if (!tittle){
        tittle='no tittle'
    } 
    return (
        <div className="card animate__animated animate__flipInX">
            <h4>{tittle}</h4><hr/>
            <img src={url} alt={id}/>
                   
        </div>
    )
}
/*
    <li key={id}>Titulo:{tittle} <br/>
                    <img src={url}/>
                    <hr />
                    </li> */


export default GifGridItem
