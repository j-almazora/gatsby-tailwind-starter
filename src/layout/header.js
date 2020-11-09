import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <header>
      <nav className='p-6 bg-gradient-to-r from-purple-500 to-red-500 w-full'>
        <div className="container mx-auto flex">
          <Link to='/'>
            <div className="flex items-center text-white mr-4">
              <span className="font-semibold text-lg">j-almazora</span>
            </div>
          </Link>

          <div className="inline flex-grow flex items-center">
            <div className="text-sm lg:flex-grow">
              <Link to="/about" className="inline-block mt-0 text-white hover:text-red-500 mr-4">
                About
              </Link>
              <Link to="/blogs" className="inline-block mt-0 text-white hover:text-red-500 mr-4">
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
