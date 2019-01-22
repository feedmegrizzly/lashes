import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="butt">
      <Link to="/login">
        <p>Login</p>
        </Link>
        <header className="butt-header">
          <h1 className="title">Shayla Bryant Eyelash Extenstions</h1>
        </header>
        <div className="mug">
          <img src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/22089287_1972304486356038_2959979825695087270_n.jpg?_nc_cat=105&_nc_ht=scontent.fphx1-2.fna&oh=077f9253c3c96e424376d53382036da6&oe=5CC83767" alt="" />
        </div>
        <div className="bio">
          <h3>~ About Me ~</h3>
          <p>My name is Shayla Bryant and I do eyelash extenstions right out of my home. I am highly motivated and very willing to take critisim to become the best. I am at my best when I am spending time with my family who consist of Tanner(My Husband), Noah(Our son), and a precious little bean expected Sept. 2019. </p>
        </div>
        {/* <div className="social-media">
          <button><a href="">F</a></button>
          <button><a href="">I</a></button>
          <button><a href="https://ggmatilda.com/">GGM</a></button>
        </div> */}
      </div>
    );
  }
}

export default Dashboard;