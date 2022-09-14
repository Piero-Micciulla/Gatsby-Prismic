import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/'
import SEO from '../components/seo/'
import Article from '../components/article'

const IndexPage = (props) => (
  <Layout>
    <div className="page">
      <SEO title="Home - blog" keywords={[`blog`, `gatsby`]} />
      {props.data.articles.edges.map(article => (
        <Article data={article.node.data} />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
  query Articles {
    articles: allPrismicArticle {
      edges {
        node {
          data {
            title {
              text
            }
            image {
              url
              alt
            }
            paragraph {
              html
            }
          }
        }
      }
    }
  }
`
