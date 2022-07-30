import React, { Component } from 'react'

export default class PageButtons extends Component {
    handleNext = () => {
        let data = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9ea305f0f2be4cf086c49ca1622d29b3&page=1&pagesize=20");
        let json_data = await data.json();
        console.log(json_data)
        console.log(data);
        this.setState({
            articles: json_data.articles
        })
    }
    render() {
        return (
            <div className="container py-5">
                <div className="container d-flex justify-content-between my-3 ">
                    <button type="button" className="btn btn-dark" onClick={this.handleNext}>&#8592; Prev</button>
                    <button type="button" className="btn btn-dark" onClick={this.handlePrev}>Next &#8594;</button>
                </div>
            </div>
        )
    }
}
