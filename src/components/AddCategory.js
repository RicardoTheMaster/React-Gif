import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setcat})=> {
    const [NewCat, setNewCat] = useState('');

    const handleInputValue=((e)=>{
        setNewCat(e.target.value);
    })
    
    const hanldeSubmit =(e)=>{
        e.preventDefault();
        if(NewCat.trim().length>2){
            setcat(cats=>[NewCat,...cats]);
            setNewCat('');
        }
        
    }
    return (
        <form onSubmit={hanldeSubmit}>
            <input 
                type="text"
                placeholder="Busca un gif"
                onChange={(e)=>handleInputValue(e)}
            />
        </form>
    )
}

AddCategory.propTypes={
    setcat: PropTypes.func.isRequired
}

