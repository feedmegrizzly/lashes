import React, { Component } from 'react';
import './Dashboard.css'

class Dashboard extends Component {
  render() {
    return (
      <div className="butt">
        <header className="butt-header">
          <h1 className="title">Shayla Bryant Eyelash Extenstions</h1>
        </header>
        <div className="mug">
          <img src="https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/22089287_1972304486356038_2959979825695087270_n.jpg?_nc_cat=0&oh=a8f54c922c761a410ef69b36d2bc916d&oe=5C2A0367" alt="" />
        </div>
        <div className="bio">
          <h3>~ About Me ~</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ratione placeat numquam exercitationem voluptates quos amet aspernatur ex, quas in unde quibusdam, debitis dolores distinctio doloremque obcaecati quis ad! Quidem.Officiis ipsam quae excepturi incidunt qui dolorem molestiae inventore. Ad explicabo soluta corrupti! Voluptatum aliquam corporis iusto deleniti. Sequi libero quaerat aliquid vel cum distinctio voluptate temporibus! Cupiditate, doloribus sapiente.
          </p>
        </div>
        <div className="social-media">
          <button><a href="">F</a></button>
          <button><a href="">I</a></button>
          <button><a href="https://ggmatilda.com/">GGM</a></button>
        </div>
      </div>
    );
  }
}

export default Dashboard;