import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-black'>
      <Header />
      <main className='min-h-full flex-grow'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
