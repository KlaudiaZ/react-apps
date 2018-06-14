import React, {Component} from 'react';
import axios from 'axios';
import './Articles.css';
import Headlines from './Headlines';
import Content from './Content';

const ARTICLES_URL = "http://localhost:3000/";

class Articles extends Component {
  state = {
    headlines: null,
    selectedArticle: null
  }

  componentDidMount () {
    axios
      .get(ARTICLES_URL + "article_headings")
      .then((response) => {
        return response.data
      })
      .then((articleHeadlines) => {
        this.setState((state) => {
          return {
            headlines: articleHeadlines
          };
        });
      });
  }

  handleArticleSelect = (articleId) => {
    axios
      .get(ARTICLES_URL + 'articles/' + articleId)
      .then((response) => {
        return response.data
      })
      .then((article) => {
          this.setState((state) => {
            return {
              selectedArticle : article
            }
          })
        })
      
  }

  render () {
    return (
      <section className="section Articles project">
        <div className="container">
          <h1 className="title">Articles React App</h1>
          {/* First component mount should fetch data and show the loader */}
          <Headlines 
            headlines={this.state.headlines} 
            onArticleSelect={this.handleArticleSelect} 
            selectedArticle={this.state.selectedArticle} />
          {/* Clicking article on the list should show loader in the right side and fetch single article */}
          <Content article={this.state.selectedArticle} />
        </div>
      </section>  
    )
  }
}

export default Articles;