require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `yuucu-tech`,
    siteTitleAlt: `yuucu-tech`,
    author: `yuucu`,
    siteUrl: `https://www.yuucu-tech.com`,
    siteImage: `/og_image.png`,
    siteDescription: `yuucuによる個人技術ブログになります。`,
    siteHeadline: `yuucu-tech`,
    siteLanguage: `ja`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-SK8W4P826C",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        formatString: "YYYY.MM.DD",
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/yuucu/`,
          },
          {
            name: `Qiita`,
            url: `https://qiita.com/yuucu`,
          },
          {
            name: `Zenn`,
            url: `https://zenn.dev/yuucu`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yuucu-tech`,
        short_name: `yuucu-tech`,
        description: `yuucuによる個人技術ブログになります。`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
