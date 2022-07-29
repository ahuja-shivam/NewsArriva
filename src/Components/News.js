import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    article = [{
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Just Smile",
        "description": "Just smile for a while. We are loading news for you",
        "url": "https://www.readersdigest.ca/culture/10-short-jokes-anyone-can-remember/",
        "urlToImage": "https://api.memegen.link/images/pigeon/Engineer/_/Is_this_Photoshop~q.png?style=https://i.imgur.com/W0NXFpQ.png&width=800&token=cy49tv234bu3jzgw587o",
        "publishedAt": "2022-07-28T07:37:26.1809038Z",
        "content": "Kherson's Antonivskiy Bridge is half a mile long and is one\r\nof two key routes spanning the Dnipro River.\r\nBut, although its still standing, the crossing is now completely\r\nunusable after damage from… [+605 chars]"
    },
    ];
    constructor() {
        super();
        console.log("This is a constructor")
        this.state = {
            articles: this.article,
            loading: false
        }
    }
    // async componentDidMount() {
    //     console.log("cdm")
    //     let data = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9ea305f0f2be4cf086c49ca1622d29b3 ");
    //     let json_data = await data.json();
    //     console.log(json_data)
    //     console.log(data);
    //     this.setState({
    //         articles: json_data.articles
    //     })
    // }
    render() {
        return (
            <>
                <div className="container py-5">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-3">
                        {
                            this.state.articles.map((element) => {
                                    // console.log("function called")
                                    return <NewsItem key={element.url} title={element.title} description={element.description} image={element.urlToImage} newsUrl={element.url} />
                                }
                            )
                        }
                    </div>
                    <br />
                    <br />

                    <div className="container d-flex justify-content-between">
                    <button type="button" className="btn btn-dark">&#8592; Prev</button>
                    <button type="button" className="btn btn-dark">Next &#8594;</button>

                        
                    </div>
                </div>
            </>
        )
    }
}
