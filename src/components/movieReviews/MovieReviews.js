import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
export function MovieReviews() {
     const { movieId } = useParams();
    const KEY = 'e1f4818a0d3fba42c34b00359742bede';
    const [data, setData] = useState([]);
    useState(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`)
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [])
    console.log(data);
    const reviews = data.results;
    return <>
        <h2>Reviews</h2>
        {reviews &&
            <ul>
           
                {
                    reviews.map(el => {
                        return <li key={el.id}>{el.content}</li>
                    })
                }
            </ul>}
    </>
}