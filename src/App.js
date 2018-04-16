import React, { Component } from 'react';
import './App.css';
import Movie from './components/Movie/Movie'
import AppLoading from './components/AppLoading'

class App extends Component {
  state = { movies: []};

  componentDidMount(){
    this._getMovie();
  }

  render() {
      const movies = this.state.movies.map( (movie, index) => {
        return (
          <Movie
        title={movie.title}
        poster={movie.large_cover_image}
        key={index} />
        // 반복할 때는 그 배열을 인식할 수 있는 고유한 키값이 필요하다.
      )
      })
      return <div className="App">{movies ? movies : <AppLoading />}</div>
  }

  _getMovie = async () => {
    const URL = "https://yts.am/api/v2/list_movies.json?sort_by=rating"

    await fetch(URL)
    .then(res => res.json())
    .then(json => {
      this.setState({ movies: json.data.movies });
    })
  }
}

export default App;
