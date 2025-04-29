import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    return (
        <footer className='border-t backdrop-blur-sm py-12 supports-[backdrop-filter]:bg-background/60 '>
            <div className='container mx-auto px-4 text-center text-gray-400'>
                <p className='text-sm '>Made with ♥️ by <Link target='_blank' to={"https://www.x.com/mnraza1907"}>MN Raza</Link> </p>
            </div>
        </footer>
    )
}

export default Footer