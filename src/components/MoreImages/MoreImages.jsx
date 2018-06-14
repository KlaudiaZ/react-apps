import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './MoreImages.css';
import LoadImages from './LoadImages';


class MoreImages extends Component{
  state = {
    page: 1,
    images: [],
    isMore: true,
    isLoading: false
  }

  componentDidMount() {
    this.getImagesFromServer();
  }

  handleNextImages = () => {
    this.setState((state) => {
      const currentPage = state.page + 1;
      this.getImagesFromServer(currentPage);
      return {
        page: currentPage
      }
    });
  }

  getImagesFromServer = (currentPage) => {
    this.setState((state) => {
      return {
        isLoading: true
      }
    });
    axios
      .get("http://localhost:3000/images?_page=" + currentPage + "&_limit=4")
      .then((response) => {
        return response.data;
      })
      .then((images) => {
          this.setState((state) => {
            if (images.length !== 0) {
              return {
                images: [...state.images].concat(images),
                isLoading: false
              }
            } else {
              return {
                isMore: false
              }
            }
          });
      });
  }

  render () {
    return (<section className="section MoreImages project">
    <div className="container">
      <h1 className="title">More Images React App</h1>
      {/* First component mount should fetch data and show the loader */}
      <LoadImages images={this.state.images} />
      <div>
        { this.state.isMore === true ?
            <Fragment>
              {
                this.state.isLoading !== true ?
                  <a className="button is-large" onClick={this.handleNextImages}>Next Images</a> :
                  <a class="button is-loading is-large">Loading</a>
              }
            </Fragment> :
            <p>No more images left</p>
        }
      </div>
    </div>
    </section>)
  }
}

export default MoreImages;