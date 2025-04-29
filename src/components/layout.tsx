import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
    return (
        <div className='bg-gradient-to-br from-background to-muted'>
            <Navbar />
            <main className='min-h-screen container mx-auto px-4 py-8'>
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout