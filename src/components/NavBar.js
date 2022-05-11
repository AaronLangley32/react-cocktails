import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='bg-purple-600 text-gray-200'>
            <Link to="/">
                <h1 className='ml-5 py-4 text-2xl'>React Cocktails</h1>
            </Link>
        </div>
    )
}

export default NavBar
