import React from "react"
import Layout from "../layout/layout"
import Helmet from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <Helmet title="Home" />
      <div className="relative flex items-center content-center justify-center pt-64 pb-64">
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span className="absolute w-full h-full bg-black"></span>
        </div>
        <div className="container relative mx-auto" data-aos="fade-in">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
              <div>
                <h1 className="text-5xl font-semibold text-white">
                  <span className="text-purple-500">Gatsby</span> Starter
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  A simple starter pack that ships with Tailwind CSS, SASS, Blog
                  page using Markdown, SEO and more
                </p>
                <a
                  href="https://www.github.com/j-almazora/gatsby-tailwind-starter"
                  className="inline-block p-4 px-6 mt-5 font-semibold text-purple-500 bg-transparent border border-purple-500 rounded hover:bg-purple-500 hover:text-white hover:border-transparent"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
    </Layout>
  )
}
