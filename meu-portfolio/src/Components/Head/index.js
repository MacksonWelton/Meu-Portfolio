import React from 'react';
import PropTypes from "prop-types";
import { Helmet } from 'react-helmet';


const Head = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content={props.author} />
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string
}


export default Head;