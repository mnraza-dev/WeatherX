import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    return (
        <footer className='p-8 bg-blue-100  flex items-center justify-center'>
            <p className='text-lg '>Made with ♥️ <Link className='text-blue-800 leading-0.5' to={"https://www.x.com/mnraza1907"}>MN Raza</Link> </p>
        </footer>
    )
}

export default Footer