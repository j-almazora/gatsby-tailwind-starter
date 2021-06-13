import { Link } from "gatsby"
import React from "react"
import Helmet from "../components/seo"
import Layout from "../layout/layout"
import Taken from "../images/taken.svg"

const NotFound = props => {
  console.log(props)
  return (
    <div>
      <Layout>
        <Helmet title="404 Page not Found" />
        <div className="container mx-auto text-white">
          <Link to="/">
            <button className="px-4 py-2 mt-6 font-bold text-purple-500 border border-purple-500 rounded hover:bg-purple-500 hover:text-white">
              Go Back
            </button>
          </Link>
          <img
            src={Taken}
            alt="404 page not found"
            className="w-64 mx-auto my-12"
          />
          <h1 className="text-center uppercase">page not found</h1>
          <h2 className="text-center">You are not supposed to see this</h2>
        </div>
      </Layout>
    </div>
  )
}

export default NotFound
