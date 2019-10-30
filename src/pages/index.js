import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"
import { graphql } from "gatsby"
// import { Helmet } from "react-helmet"

export default ({data}) => {
  console.log(data);
  return (
    <PrimaryLayout column="col-xs-6">
      <div className="row">
        {data.allWordpressPost.nodes.map(node => (
          <Post
            image={node.featured_media.source_url}
            title={node.title}
            excerpt={node.excerpt}
            readMore={node.slug}
          />
        ))}
      </div>
    </PrimaryLayout>
  )
}

export const query = graphql`
      {
        allWordpressPost {
          nodes {
            slug
            title
            excerpt
            featured_media {
              source_url
            }
          }
        }
      }
`


      // <Helmet>
      //   <title>Sport Droid</title>
      //   <meta name="description" content="Sport Blog and News" />
      //   <meta name="keywords" content="sport, droid, football, soccer, tennis, basketball" />
      //   <meta name="robots" content="index, follow"></meta>
      // </Helmet>
