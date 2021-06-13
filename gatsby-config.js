module.exports = {
  /* ----- Your site config here ----- */
  siteMetadata: {
    title: ``,
    defaultTitle: `Gatsby-starter-with-Tailwind`,
    titleTemplate: "%s | Company", // Company name or any title
    description: ``,
    defaultDescription: `Blazing fast modern site generator for React. Tailwind CSS integrated, Blogs configured for Markdown and/or Contentful, with SEO`,
    url: `https://www.gatsbyjs.com`, // no trailing slash allowed

    image: "", // Path to your image you placed in the 'static' folder
    twitterUsername: "@gatsbyjs",

    author: `John Almazora`,
    year: 2020,
  },

  /* ----- Your plugins config here ----- */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'static',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              include: ['featured'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              exclude: ['featured.skip'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: { 
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 400 
            },
          },
          {
            resolve: `gatsby-remark-classes`, // Add class attributes to markdown elements
            options: {
              classMap: {
                "heading[depth=1]": "blog-h1",
                "heading[depth=2]": "blog-h2",
                paragraph: "blog-text",
                list: "list-decimal pl-4",
              }
            }
          }
        ],
      },
    },

    `gatsby-plugin-image`,
    
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: `jpg`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 100,
        failOnError: true,
      },
    },

    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },

    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },

    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss")("./tailwind.config.js"),
          // require(`autoprefixer`),
        ],
      },
    },

    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true },
    },
  ],
}
