import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <div className="flex max-w-[100%]">
            {children}
        </div>
        <Footer/>
    </>
  )
}

export default Layout