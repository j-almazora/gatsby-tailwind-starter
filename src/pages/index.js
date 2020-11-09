import React from "react"
import Layout from "../layout/layout"
import SEO from '../components/seo'

export default function Home() {
  return (
    <Layout>
      <SEO title='Home' />
      <div className="relative pt-64 pb-64 flex content-center items-center justify-center">
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span className="w-full h-full absolute bg-black"></span>
        </div>
        <div className="container relative mx-auto" data-aos="fade-in">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-semibold text-5xl">
                  <span className="text-purple-500">Gatsby</span> Starter
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  A simple starter pack that ships with Tailwind CSS, SASS, Blog page using Markdown, SEO and more
                </p>
                <a href='https://www.github.com/j-almazora/gatsby-tailwind-starter'
                  className="mt-5 bg-transparent hover:bg-purple-500 text-purple-500 font-semibold hover:text-white p-4 px-6 border border-purple-500 hover:border-transparent rounded inline-block">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden">
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
    </Layout>
  )
}
