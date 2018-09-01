import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="app">
          <header>
            <h1>React<strong>Movies</strong></h1>
            <nav />
            <div className="search"><svg><use xlinkHref="#ico-search" /></svg></div>
          </header>

          <h2>Most Popular Movies</h2>

          <section className="movies">
            <div className="movie">
              <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-room.jpg?raw=true" alt className="poster" />
              <div className="title">Room</div>
              <div className="info">
                <span className="length">117 min</span>
                <span className="year">2015</span>
              </div>
              <div className="desc">
                Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?
              </div>
            </div>
            <div className="movie">
              <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-whiplash.jpg?raw=true" alt className="poster" />
              <div className="title">Whiplash</div>
              <div className="info">
                <span className="length">167 min</span>
                <span className="year">2015</span>
              </div>
              <div className="desc">
                Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.
              </div>
            </div>
            <div className="movie">
              <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-madmax.jpg?raw=true" alt className="poster" />
              <div className="title">Mad Max</div>
              <div className="info">
                <span className="length">120 min</span>
                <span className="year">2015</span>
              </div>
              <div className="desc">
                An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos.
              </div>
            </div>
            <div className="movie">
              <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-therevenant.jpg?raw=true" alt className="poster" />
              <div className="title">The Revenant</div>
              <div className="info">
                <span className="length">156 min</span>
                <span className="year">2015</span>
              </div>
              <div className="desc">
                In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.
              </div>
            </div>
          </section>

          {/* Movie details */}
          <div className="detail" style={{ display: 'none' }}>
            <svg className="close">
              <use xlinkHref="#close" />
            </svg>
            <div className="movie">
              <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-room.jpg?raw=true" alt className="poster" />
              <div className="title">Room</div>
              <div className="info">
                <span className="length">117 min</span>
                <span className="year">2015</span>
              </div>
              <div className="desc">
                Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?
              </div>
              <button className="play">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 232.153 232.153" style={{enableBackground: 'new 0 0 232.153 232.153'}} xmlSpace="preserve" width="10px" height="10px">
                  <g id="Play">
                    <path style={{fillRule: 'evenodd', clipRule: 'evenodd'}} d="M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266   c-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267   l154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z" fill="#FFFFFF" />
                  </g>
                </svg> play movie
              </button>
            </div>
          </div>
          {/* end of movie details */}
        </div>

        {/* Icons */}
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: 'none'}}>
          <symbol id="close" viewBox="0 0 212.982 212.982">
            <g>
              <path style={{fillRule: 'evenodd', clipRule: 'evenodd'}} d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312   c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312   l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937   c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z" fill="#525661" />
            </g>
          </symbol>
          <symbol id="ico-search">
            <path fillRule="evenodd" clipRule="evenodd" fill="#363a47" d="M14.769,14.769c-0.342,0.342-0.896,0.342-1.237,0l-3.756-3.756
                                                                    c-2.399,1.793-5.801,1.623-7.981-0.557c-2.392-2.392-2.392-6.271,0-8.663s6.271-2.392,8.662,0c2.18,2.181,2.35,5.583,0.557,7.981
                                                                    l3.756,3.756C15.11,13.873,15.11,14.427,14.769,14.769z M9.219,3.032c-1.709-1.709-4.479-1.709-6.188,0
                                                                    c-1.708,1.708-1.708,4.479,0,6.188c1.709,1.708,4.479,1.708,6.188,0C10.927,7.51,10.927,4.74,9.219,3.032z" />
          </symbol>
        </svg>
      </div>
    );
  }
}

export default App;
