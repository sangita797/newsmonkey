import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import imges from "../assets/images/Mask.jpg"
export class News extends Component {
    articles=[ {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "CBS News",
        "title": "Jurors in Alex Murdaugh murder trial to visit South Carolina home where his wife and son were killed - CBS News",
        "description": "fdafshtloo567tr",
        "url": "https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LmNic25ld3MuY29tL25ld3MvYWxleC1tdXJkYXVnaC1tdXJkZXItdHJpYWwtanVyb3JzLXdpbGwtdmlzaXQtY29sbGV0b24tY291bnR5LW1vc2VsbGUtY3JpbWUtc2NlbmUv0gFyaHR0cHM6Ly93d3cuY2JzbmV3cy5jb20vYW1wL25ld3MvYWxleC1tdXJkYXVnaC1tdXJkZXItdHJpYWwtanVyb3JzLXdpbGwtdmlzaXQtY29sbGV0b24tY291bnR5LW1vc2VsbGUtY3JpbWUtc2NlbmUv?oc=5",
        "urlToImage": "https://phl17.com/wp-content/uploads/sites/7/2023/02/GettyImages-988351346.jpg?w=724&h=483&crop=1",
        "publishedAt": "2023-02-28T00:44:00Z",
        "content": null
    }, {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "PHL17 Philadelphia ",
        "title": "CDC warns of drug-resistant stomach bug amid rise in cases - PHL17 Philadelphia ",
        "description": "teyerywdsghhjtrir",
        "url": "https://news.google.com/rss/articles/CBMiUWh0dHBzOi8vcGhsMTcuY29tL25tdy9jZGMtd2FybnMtb2YtZHJ1Zy1yZXNpc3RhbnQtc3RvbWFjaC1idWctYW1pZC1yaXNlLWluLWNhc2VzL9IBVWh0dHBzOi8vcGhsMTcuY29tL25tdy9jZGMtd2FybnMtb2YtZHJ1Zy1yZXNpc3RhbnQtc3RvbWFjaC1idWctYW1pZC1yaXNlLWluLWNhc2VzL2FtcC8?oc=5",
        "urlToImage": "https://phl17.com/wp-content/uploads/sites/7/2023/02/GettyImages-988351346.jpg?w=724&h=483&crop=1",
        "publishedAt": "2023-02-28T00:27:20Z",
        "content": null
    }, {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "MMA Fighting",
        "title": "Chael Sonnen: Jake Paul loss ‘just helps to add the validity’ to career - MMA Fighting",
        "description": "wtwetwetwetwtw",
        "url": "https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3Lm1tYWZpZ2h0aW5nLmNvbS8yMDIzLzIvMjcvMjM2MTc2NDMvY2hhZWwtc29ubmVuLWpha2UtcGF1bC1sb3NzLWp1c3QtaGVscHMtdG8tYWRkLXRoZS12YWxpZGl0eS10by1jYXJlZXLSAYABaHR0cHM6Ly93d3cubW1hZmlnaHRpbmcuY29tL3BsYXRmb3JtL2FtcC8yMDIzLzIvMjcvMjM2MTc2NDMvY2hhZWwtc29ubmVuLWpha2UtcGF1bC1sb3NzLWp1c3QtaGVscHMtdG8tYWRkLXRoZS12YWxpZGl0eS10by1jYXJlZXI?oc=5",
        "urlToImage": "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/JON-JONES-CHAMPION-Mens-Champion-Jersey-Back-2.0_1000x.jpg?v=1663679381",
        "publishedAt": "2023-02-28T00:00:00Z",
        "content": null
    }, {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "CNET",
        "title": "'Ted Lasso' on Apple TV Plus: It's Ted vs. Nate in Season 3 Trailer - CNET",
        "description": "rerewer",
        "url": "https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LmNuZXQuY29tL2N1bHR1cmUvZW50ZXJ0YWlubWVudC90ZWQtbGFzc28tb24tYXBwbGUtdHYtcGx1cy1pdHMtdGVkLXZzLW5hdGUtaW4tc2Vhc29uLTMtdHJhaWxlci_SAWRodHRwczovL3d3dy5jbmV0LmNvbS9nb29nbGUtYW1wL25ld3MvdGVkLWxhc3NvLW9uLWFwcGxlLXR2LXBsdXMtaXRzLXRlZC12cy1uYXRlLWluLXNlYXNvbi0zLXRyYWlsZXIv?oc=5",
        "urlToImage": "https://phl17.com/wp-content/uploads/sites/7/2023/02/GettyImages-988351346.jpg?w=724&h=483&crop=1",
        "publishedAt": "2023-02-27T23:48:22Z",
        "content": null
    }
]
    constructor(){
        super();
        console.log('hello this is a constructor from news component');
        this.state={
            articles:this.articles,
            loading:false,
            page:1

        }
    }
    async componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=61f1db5860b74313955a1788cadcd536&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsdata = await data.json()
        console.log(parsdata);
        this.setState({articles:parsdata.articles});
    }
    prevhandle = async ()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=61f1db5860b74313955a1788cadcd536&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsdata = await data.json()
        console.log(parsdata);
        this.setState({
            page: this.state.page - 1,
            articles: parsdata.articles
    })
    }
    nexthandle = async () =>{
        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=61f1db5860b74313955a1788cadcd536&page=${this.state.page + 1}&pageSize= ${this.props.pageSize}`;
        let data = await fetch(url);
        let parsdata = await data.json()
        console.log(parsdata);

        this.setState({
            page:this.state.page + 1,
            articles:parsdata.articles,
        
    });
    }
  render() {
    return (
      <div className='container my-3'>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} />
                        </div>
            
            })} 
            
        </div>
        <div className="container">
            <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state<=1} onClick={this.prevhandle} className="btn btn-primary btn-sm">Prev</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} onClick={this.nexthandle} className="btn btn-secondary btn-sm">Next</button>
            </div>
        </div>
      </div>
    )
  }
}

export default News
