import React, { useContext } from 'react'
import ContextData from './ContextData'
import { useNavigate } from 'react-router-dom'

const Addnew = () => {

    const DataContext = useContext(ContextData)
    const nav = useNavigate();

    const newObject = {
        name: "",
        age: "",
        course: "",
        batch: ""
    }

    const handleChange = (event) => {
        newObject[event.target.name] = event.target.value;
    }

    const handleSubmit = () => {
        DataContext.entries.push(newObject);
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
                        <input name='name' onChange={handleChange} placeholder='Enter your name'></input>
                        <input name='age' onChange={handleChange} placeholder='Enter your age'></input>
                    </div>
                    <div className='name_two'>
                        <input name='course' onChange={handleChange} placeholder='Enter your course'></input>
                        <input name='batch' onChange={handleChange} placeholder='Enter your batch'></input>
                    </div>
                </div>
                <div className='button_box'>
                    <button className='button_handle' onClick={handleCancel}>Cancel</button>
                    <button className='button_handle' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Addnew
