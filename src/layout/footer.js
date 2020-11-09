import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          year
          description
        }
      }
    }
  `)

  const { author, year } = data.site.siteMetadata
  return (
    <footer className='bg-gray-900 w-full h-auto text-white pt-12 pb-8 px-4 mt-4'>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between">
        <div className='w-1/3'>
          <a href="https://www.gatsbyjs.com">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" focusable="false" className='w-1/4 pl-4'>
              <title>
                Gatsby
              </title>
              <circle cx="14" cy="14" r="14" fill="#639"/>
              <path fill="#fff" d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"/>
            </svg>
          </a>
        </div>

        <div className="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Product</li>
                <li><a href="https://youtu.be/dQw4w9WgXcQ" className="inline-block py-2 px-3 text-gray-500 hover:text-purple-500 no-underline">Features</a></li>
                <li><a href="https://youtu.be/dQw4w9WgXcQ" className="inline-block py-2 px-3 text-gray-500 hover:text-purple-500 no-underline">Integrations</a></li>
                <li><a href="https://youtu.be/dQw4w9WgXcQ" className="inline-block py-2 px-3 text-gray-500 hover:text-purple-500 no-underline">Pricing</a></li>
                <li><a href="https://youtu.be/dQw4w9WgXcQ" className="inline-block py-2 px-3 text-gray-500 hover:text-purple-500 no-underline">FAQ</a></li>
            </ul>

            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Company</li>
                <li><a href="https://youtu.be/dQw4w9WgXcQ" className="inline-block py-2 px-3 text-gray-500 hover:text-purple-500 no-underline">Privacy</a>
                </li>
                <li><a href="https://youtu.be/dQw4w9WgXcQ" className="inline-block py-2 px-3 text-gray-500 hover:text-purple-500 no-underline">Terms of Service</a></li>
                <li><a href="https://youtu.be/dQw4w9WgXcQ" className="inline-block py-2 px-3 text-gray-500 hover:text-purple-500 no-underline">Oops</a></li>
            </ul>

            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Developers</li>
                <li><a href="https://youtu.be/dQw4w9WgXcQ" className="inline-block py-2 px-3 text-gray-500 hover:text-purple-500 no-underline">Developer API</a></li>
                <li><a href="https://youtu.be/dQw4w9WgXcQ" className="inline-block py-2 px-3 text-gray-500 hover:text-purple-500 no-underline">Documentation</a></li>
                <li><a href="https://youtu.be/dQw4w9WgXcQ" className="inline-block py-2 px-3 text-gray-500 hover:text-purple-500 no-underline">Guides</a></li>
            </ul>
        </div>
      </div>

      <div className="pt-4 mt-4 pt-6 text-gray-700 border-t border-gray-800 text-sm text-center"> © {year} {author}. All rights reserved.</div>
    </footer>
  )
}

export default Footer
