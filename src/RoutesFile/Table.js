import React, { useContext } from 'react'
import ContextData from './ContextData'
import { Link, useNavigate } from 'react-router-dom'

const Table = () => {
    const DataContext = useContext(ContextData);
    const nav = useNavigate();

    return (
        <>
            <div className='students'>
                <h1>Students Details</h1>
                <button className='add' onClick={() => {nav('/addnew') }}>Add new student</button>
            </div>
            <div className='table'>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Batch</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DataContext.entries.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td>
                                    <Link className='linke' to='/edit' state={{ data: index }} >Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table
