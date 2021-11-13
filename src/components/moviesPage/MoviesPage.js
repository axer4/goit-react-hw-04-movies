import { useEffect, useState } from "react";
import ApiSettings from "../../service/apiSettings";
import { Link } from "react-router-dom";
import styles from './moviesPage.module.css';
import { useLocation,useHistory } from "react-router";
export default function MoviesPage() {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const [saved, setSaved] = useState();
    const ImageBaseUrl = "https://image.tmdb.org/t/p/w342";
    const location = useLocation();
    useEffect(() => {
        let saved = localStorage.getItem('value');
        setSaved(saved);
        // localStorage.clear();
    }, [])
    const inputHandler = (e) => {
        setValue(e.target.value)
    }
    const submit = () => {
        localStorage.setItem('value',value)
        ApiSettings(value)
            .then(response => setData(response.data.results));
    }
    console.log(data);
    useEffect(() => {
        if (saved) {
            ApiSettings(saved)
                .then(response => setData(response.data.results));
        }
        return
    },[saved])
    return <>
        <div className ={styles.search}>
        <input type="input" name="query" placeholder="Введите название фильма" onChange={inputHandler}/>
            <button onClick = {submit}>Search</button>
            </div>
      <ul className ={styles.list}>
        {data.map(item => {
            return <li key={item.id} className ={styles.item} >
                <Link
                    to={{
                        pathname: `/movies/${item.id}`,
                        state: {
                            from: location.pathname,
                            search: value
                        }
                    }
                    }
                >
                <h3 className = {styles.heading} >{item.original_title}</h3>
                <img src={item.poster_path
                    ? `${ImageBaseUrl}${item.poster_path}`
                        : null} alt={item.original_title} />
                    
                    </Link>
            </li>
        })} 
    </ul>
        </>
}