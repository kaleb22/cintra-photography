import { Component } from 'react';
import TypeWritter from '../typeWritter/TypeWritter';
import './HeaderFullPage.scss'

class HeaderFullPage extends Component {

  render() {
    return (
      <div className="bg" style={{ backgroundImage: "url(cintra-photography/img_parallax.jpg)"}}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="standard-container">
          <div className="app-logo">
                  <img src={process.env.PUBLIC_URL + '/rapha_sem_logo.png'} alt="raphaela cintra fotografia logo"></img>
          </div>
        </div>

        <TypeWritter></TypeWritter>

      </div>
    )
  }
}

export default HeaderFullPage;