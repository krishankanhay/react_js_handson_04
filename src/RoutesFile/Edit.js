import React, { useContext } from 'react'
import ContextData from './ContextData'
import { useLocation, useNavigate } from 'react-router-dom'

const Edit = () => {

    const DataContext = useContext(ContextData);
    const nav = useNavigate();
    const indexLocation = useLocation().state.data

    const currentData = {
        name: DataContext.entries[indexLocation].name,
        age: DataContext.entries[indexLocation].age,
        course: DataContext.entries[indexLocation].course,
        batch: DataContext.entries[indexLocation].batch,
    }

    const handleChange = (event) => {
        currentData[event.target.name] = event.target.value;
    }

    const handleSubmit = () => {
        DataContext.entries[indexLocation] = currentData;
        nav(-1)
    }

    const handleCancel = () => {
        nav(-1)
    }

    return (
        <>
            <div className='input_contener'>
                <div className='input_box'>
                    <div className='name_two'>
                        <input name='name' onChange={handleChange} placeholder={DataContext.entries[indexLocation].name}></input>
                        <input name='age' onChange={handleChange} placeholder={DataContext.entries[indexLocation].age}></input>
                    </div>
                    <div className='name_two'>
                        <input name='course' onChange={handleChange} placeholder={DataContext.entries[indexLocation].course}></input>
                        <input name='batch' onChange={handleChange} placeholder={DataContext.entries[indexLocation].batch}></input>
                    </div>
                </div>
                <div className='button_box'>
                    <button className='button_handle' onClick={handleCancel}>Cancel</button>
                    <button className='button_handle' onClick={handleSubmit}>Update</button>
                </div>
            </div>
        </>
    )
}

export default Edit
