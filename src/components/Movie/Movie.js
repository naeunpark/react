import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

class Movie extends Component {
  render() {
    return(
    <div className="movie_card">
    <div className="movie_col">
      <MoviePoster poster={this.props.poster} />
    </div>
    <div className="movie_col">
       <h1 className="movie__title">{this.props.title}</h1>
       <MovieSummery />
    </div>
    </div>
  )
 }
}
//Movie(위에 적힌 클라스), propsTypes(class 내부에 존재하는 props 지칭)
//PropTypes(모듈에서 불러오는 것)
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}
//components가 많으면 생명주기가 많이 돌아서 속도가 느려지기 때문에 변수 함수로 바꿔줌
const MoviePoster = ({ poster }) => {
    return <img className="movie_poster" src={poster} alt="" />
}

const MovieSummery = () => {
    return <p className="movie__summary">Summary</p>
}

export default Movie;
