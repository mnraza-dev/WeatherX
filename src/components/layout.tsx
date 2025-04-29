import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
    return (
        <div className='bg-gradient-to-br from-background to-muted'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
export default Layout