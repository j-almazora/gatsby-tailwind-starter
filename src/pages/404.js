import { Link } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import Layout from '../layout/layout'
import Taken from '../images/taken.svg'

const NotFound = (props) => {
  console.log(props)
  return (
    <div>
      <Layout>
        <SEO title="404 Page not Found" />
        <div className="container mx-auto text-white">
          <Link to="/">
            <button className='border border-purple-500 hover:bg-purple-500 text-purple-500 hover:text-white font-bold mt-6 py-2 px-4 rounded'>Go Back</button>
          </Link>
          <img src={Taken} alt="404 page not found" className='mx-auto w-64 my-12' />
          <h1 className='text-center uppercase'>page not found</h1>
          <h2 className='text-center'>You are not supposed to see this</h2>
        </div>
      </Layout>
    </div>
  )
}

export default NotFound
