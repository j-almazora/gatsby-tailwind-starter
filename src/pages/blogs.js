import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "../components/seo"
import Layout from "../layout/layout"
import { StaticImage } from "gatsby-plugin-image"

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
      <Helmet title="Blogs" />
      <div className="container flex flex-col items-center mx-auto md:flex-row">
        {data.allMarkdownRemark.edges.map(edge => {
          const { title, date } = edge.node.frontmatter

          return (
            <div
              className="max-w-sm mx-2 my-8 overflow-hidden text-white bg-gray-800 rounded shadow-lg"
              key={edge.node.id}
            >
              <Link to={edge.node.fields.slug}>
                <StaticImage
                  className="w-full"
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                  placeholder="blurred"
                />
              </Link>

              <div className="px-6 py-4">
                <Link to={edge.node.fields.slug}>
                  <div className="mb-2 text-xl font-bold">{title}</div>
                </Link>
                <p className="text-base text-gray-600">{date}</p>
              </div>
              <div className="px-6 py-4">
                <p>{edge.node.excerpt}</p>

                <Link to={edge.node.fields.slug}>
                  <button className="px-4 py-2 mt-6 font-bold text-purple-500 border border-purple-500 rounded hover:bg-purple-500 hover:text-white">
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
