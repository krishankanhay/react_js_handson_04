import React, { useState } from 'react'
import './Style.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import ContextData from './ContextData'
import Table from './Table'
import Edit from './Edit'
import Addnew from './Addnew'
import Students from './Students'
import NotFound from './NotFound'

function RouteCompo() {

    const [data, setData] = useState([
        { name: "Monu", age: 26, course: "MERN", batch: "October" },
        { name: "Shubham", age: 25, course: "MERN", batch: "November" },
        { name: "Biden", age: 26, course: "MERN", batch: "September" },
        { name: "Barar", age: 22, course: "MERN", batch: "September" },
        { name: "Christ", age: 23, course: "MERN", batch: "October" },
        { name: "Sonu", age: 24, course: "MERN", batch: "November" },
        { name: "Kunal", age: 27, course: "MERN", batch: "October" },
    ], [])

    return (
        <div>
            <BrowserRouter>
                <div className='links'>
                    <NavLink className="link" to='/home'
                        style={({ isActive }) => {
                            return isActive ? { color: "aqua" } : { color: "white" };
                        }}
                    >Home</NavLink>
                    <NavLink className="link" to='/student'
                        style={({ isActive }) => {
                            return isActive ? { color: "aqua" } : { color: "white" };
                        }}
                    >Students</NavLink>
                    <NavLink className="link" to='/contact'
                        style={({ isActive }) => {
                            return isActive ? { color: "aqua" } : { color: "white" };
                        }}
                    >Contact US</NavLink>
                </div>
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/student' element={
                        <ContextData.Provider value={{ entries: data, UpdateFun: setData }}>
                            <Table />
                            <Students />
                        </ContextData.Provider>
                    } />
                    <Route path='/edit' element={
                        <ContextData.Provider value={{ entries: data, UpdateFun: setData }}>
                            <Edit />
                        </ContextData.Provider>
                    } />
                    <Route path='/addnew' element={
                        <ContextData.Provider value={{ entries: data, UpdateFun: setData }}>
                            <Addnew />
                        </ContextData.Provider>
                    } />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteCompo
