import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItem extends Component {
   
  render() {
    let {title,description,imgurl,newsurl}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <div className="img-wr">
                <img src={!imgurl?"https://phl17.com/wp-content/uploads/sites/7/2023/02/GettyImages-988351346.jpg?w=724&h=483&crop=1":imgurl} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <Link to={newsurl} className="btn btn-primary" target="_blank">Read More</Link>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
