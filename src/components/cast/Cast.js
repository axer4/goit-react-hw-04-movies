import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
import styles from './cast.module.css'
export function Cast() {
    const { movieId } = useParams();
    const KEY = 'e1f4818a0d3fba42c34b00359742bede';
     const castImageBaseUrl = "https://image.tmdb.org/t/p/w45"
    const [data, setData] = useState([]);
    useState(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [])
    console.log(data);
    const actors = data.cast;
    console.log(actors);
    return (
        <div>
            <h2 className = {styles.heading}>Actors:</h2>
            {actors &&
                <ul className ={styles.list}>
                    {actors.map(actor => {
                        return <li className = {styles.item} key={actor.id}>
                            <img className ={styles.img} src={`${castImageBaseUrl}${actor.profile_path}`} alt={actor.name} />
                            <p>{actor.name}</p>
                            <p>Popularity:{actor.popularity}</p>
                        </li>
                    })}
                </ul>}
            </div>)
}