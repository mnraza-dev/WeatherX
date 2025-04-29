import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from '@/context/theme-provider'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark";

    return (
        <header className='sticky top-0 z-50 border-b bg-background/95  backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60 '>
            <nav className='container mx-auto flex justify-between items-center px-4 h-16'>
                <Link to={"/"} className='text-2xl text-purple-500'>Weather-<span className='text-gray-400'>X</span></Link>
                <div className='flex gap-4'>
                    <Link to={"/"}>Search Box</Link>
                    <Link to={"/about"}>About</Link>
                    <div onClick={() => setTheme(isDark ? "light" : "dark")} className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}>
                        {isDark ? (
                            <>
                                <SunIcon className='text-yellow-500 rotate-0 transition-all' size={20} />
                            </>
                        ) : (
                            <>
                                <MoonIcon size={20} />
                            </>
                        )}
                    </div>

                </div>
            </nav>
        </header>
    )
}
export default Navbar