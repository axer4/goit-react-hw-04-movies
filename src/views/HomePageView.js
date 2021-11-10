import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./homePage.module.css";
export default function HomePage() {
    const [data, setData] = useState([])
    const ImageBaseUrl = "https://image.tmdb.org/t/p/w342";
    useState(() => {
        axios
            .get('https://api.themoviedb.org/3/trending/all/week?api_key=e1f4818a0d3fba42c34b00359742bede&language=en-US')
            .then(response => setData(response.data.results))
            .catch(err => console.log(err))
    }, [])
    console.log(data);
     return  <ul className = {style.list}>
        {data.map(item => {
            return <li key={item.id} className={style.item}>
                <Link
                    to={{
                        pathname: `/movies/${item.id}`,
                    }}
                >
                <h3 className={style.heading}>{item.original_title}</h3>
                    <img src={item.poster_path
                        ? `${ImageBaseUrl}${item.poster_path}`
                        : null} alt={item.original_title} className={ style.img}/>
                    </Link>
            </li>
        })} 
    </ul>
}