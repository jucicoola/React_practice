import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';
import heroImage from '../assets/hero.png';

class Home extends React.Component{
    state = {
      isLoading: true,
      movies : [
        {
          id: 1,
          year: 2024,
          title: "영화는 무슨",
          summary: "우왕 역시 짜증나",
          medium_cover_image: heroImage,
          genres: ["Action", "Drama"]
        },
        {
          id: 2,
          year: 2023,
          title: "달마야 놀자",
          summary: "두 번째 영화의 요약문입니다. 장르 리스트와 이미지 정렬이 잘 맞는지 확인하세요.",
          medium_cover_image: heroImage,
          genres: ["Comedy", "Sci-Fi"]
        }
      ],
    // };
    // getMovies = async() => {
    //   const {
    //     data: {
    //       data: {movies},
    //     },
    //   }= await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //   this.setState({movies, isLoading: false})
    // }
    // // 영화데이터 로딩
    // componentDidMount(){
    //   this.getMovies();
    }
    render(){
      const {isLoading, movies} = this.state;
      return (
            // <section className="container">
            //   {isLoading ? (
            //     <div className ="loader">
            //       <span className ="loader__text">Loading...</span>
            //     </div>
            //   ) : (
                <div className = "movies">
                  {movies.map(movie => (
                    <Movie
                      key = {movie.id}
                      id = {movie.id}
                      year = {movie.year}
                      title = {movie.title}
                      summary = {movie.summary}
                      poster = {movie.medium_cover_image}
                      genres={movie.genres}
                      />
                    ))}
                </div>
              // )}
              // </section>
      );
    }
}

export default Home