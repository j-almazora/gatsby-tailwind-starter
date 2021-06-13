import React from "react"
import Helmet from "../components/seo"
import Layout from "../layout/layout"
import OptimizeImage from "../images/optimize-image.svg"

const About = () => {
  return (
    <Layout>
      <Helmet title="About" />
      <div className="container flex flex-col items-center justify-center py-6 mx-auto text-white md:flex-row md:py-40 md:px-24">
        <div className="w-1/2">
          <img src={OptimizeImage} alt="Built-in features" className="px-12" />
        </div>
        <div className="w-1/2">
          <h1>Built-in Features</h1>
          <ul className="list-disc list-inside">
            <li>Tailwind CSS</li>
            <li>
              Plugins installed: SASS, Helmet, gatsby-source-filesystem,
              gatsby-transformer-remark, gatsby-sharp-images, and more
            </li>
            <li>SEO ready using Helmet</li>
            <li>Basic layout: Header, Body, and Footer + 404</li>
            <li>Blog page initialized using Markdown files</li>
            <li>Nothing too fancy, just add to it as you go</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default About
