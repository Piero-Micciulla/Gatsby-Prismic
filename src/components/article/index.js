import React from 'react'
import { Link } from 'gatsby'
// Import custom style for this component
import '../article/style.scss'

const Article = (props) => (
  <Link to={`/blog/`} className="c-article">
    <img alt={props.data.image.alt} src={props.data.image.url} />
    <h2>{props.data.title.text}</h2>
    <div
        className="c-article-content"
        dangerouslySetInnerHTML={{ __html: props.data.paragraph.html }}
    />
  </Link>
)

export default Article