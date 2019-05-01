import Crawl from 'react-star-wars-crawl'
import React from 'react';

const CrawlComponent = (props) => {
  return (
    <Crawl>
      <h3>{props.crawl}</h3>
      <h3>{props.release_year}</h3>
    </Crawl>
  )
}

export default CrawlComponent;