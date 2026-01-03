import React, { Component } from 'react'

export class NewsItem extends Component {
 

  render() {
       let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
       <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '50%', zIndex: '1'}}>{source}</span>
          <img src={!imageUrl?"https://thumbs.dreamstime.com/b/news-template-blank-newspaper-vector-front-page-generic-retro-mockup-copy-space-281740809.jpg":imageUrl} className="card-img-top" alt="img"/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="card-text">By {!author?"Unknown": author} <br /> updated on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
