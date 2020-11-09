import { graphql } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import Layout from "../layout/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      timeToRead
      html
    }
  }
`

const Blog = props => {
  const { title, date } = props.data.markdownRemark.frontmatter
  const { timeToRead } = props.data.markdownRemark
  
  return (
    <Layout>
      <SEO title={title} />
      <div className="container mx-auto text-white">
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{`${timeToRead} ${timeToRead > 1 ? 'mins' : 'min'} read`}</p>
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
      </div>
    </Layout>
  )
}

export default Blog
