const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // const slug = createFilePath({ node, getNode, basePath: `src/content`, trailingSlash: false })
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog.js`)

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.map(edge => {
    createPage({
      path: `/blogs/${edge.node.fields.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })
}
