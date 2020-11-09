import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import Layout from "../layout/layout"

const Blogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            excerpt
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="container mx-auto flex flex-col items-center md:flex-row">
        {data.allMarkdownRemark.edges.map(edge => {
          const { title, date } = edge.node.frontmatter

          return (
            <div
              className="bg-gray-800 text-white max-w-sm rounded overflow-hidden shadow-lg my-8 mx-2"
              key={edge.node.id}
            >
              <Link to={edge.node.fields.slug}>
                <img
                  className="w-full"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
              </Link>

              <div className="px-6 py-4">
                <Link to={edge.node.fields.slug}>
                  <div className="font-bold text-xl mb-2">
                    {title}
                  </div>
                </Link>
                <p className="text-gray-600 text-base">
                  {date}
                </p>
              </div>
              <div className="px-6 py-4">
                <p>{edge.node.excerpt}</p>

                <Link to={edge.node.fields.slug}>
                  <button className="border border-purple-500 hover:bg-purple-500 text-purple-500 hover:text-white font-bold mt-6 py-2 px-4 rounded">
                    Button
                  </button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blogs
