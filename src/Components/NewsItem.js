import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, image, newsUrl} = this.props; 
    return (
      <div className="col-md-4 my">
          <div className="card shadow-sm" style={{height: "225",
                                                  width: "100%"}}>
          <img src={!image?"https://media.istockphoto.com/vectors/news-alerts-simple-text-banner-template-minimalistic-style-breaking-vector-id1284694380":image} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a href={newsUrl} target = "_blank" rel="noopener noreferrer"><button type="button" className="btn btn-m btn-outline-secondary">View</button></a>
                </div>
                {/* <small className="text-muted">9 mins</small> */}
              </div>
            </div>
          </div>
        </div>
    )
  }
}

NewsItem.defaultProps = {
  title: "Title of News",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  image: "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  newsUrl: "https://www.hindustantimes.com/"
}