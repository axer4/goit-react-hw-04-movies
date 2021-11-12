import axios from "axios";
import { NavLink, Route } from "react-router-dom";
import { Cast } from "../cast/Cast";
import { MovieReviews } from "../movieReviews/MovieReviews";
import { useState } from "react";
import { useParams ,useHistory, useLocation} from "react-router";
import styles from './movieDetails.module.css';
import GoBackButton from "../backButton/GoBackButton";
export default function MovieDetailsPage(id) {
    const { movieId } = useParams();
    const KEY = 'e1f4818a0d3fba42c34b00359742bede';
    const [data, setData] = useState('');
    const ImageBaseUrl = "https://image.tmdb.org/t/p/w342";

    useState(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`)
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [])
  const history = useHistory();
    const handleGoBackButton = () => {
      history.goBack();
   };
  //   console.log(data);
  return (<>
    <div className={styles.info}>
      <GoBackButton goBack={ handleGoBackButton }/>
        <h2 className= {styles.heading}>{data.title}</h2>
        <img src={`${ImageBaseUrl}${data.poster_path}`} alt={ data.title}/>
        <p>Data : {data.release_date}</p>
        <p>Budget : {data.budget}</p>
      <p>Homepage: <a href={data.homepage}>{data.homepage}</a></p>
      </div>
        <ul className = {styles.list}>
            <li className = {styles.item}>
         <NavLink
                to={{
                  pathname: `/movies/${movieId}/cast`,
                }}
              >
                Cast
            </NavLink>
            </li>
            <li>
                 <NavLink
                to={{
                  pathname: `/movies/${movieId}/reviews`,
                }}
              >
                Reviews
            </NavLink>
            </li>
        </ul>
        <Route path="/movies/:movieId/cast">
              <Cast />
            </Route>
            <Route path="/movies/:movieId/reviews">
              <MovieReviews />
            </Route>
    </>)
}