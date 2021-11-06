import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import { HomePage } from "./components/homepage/HomePage";
import { MoviesPage } from "./components/moviesPage/MoviesPage";
import ApiSettings from "./service/apiSettings";

const App = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const inputHandler = (e) => {
        setValue(e.target.value);
    }
    const searchMovies = () => {
        ApiSettings(value)
            .then(response => setData(response.data.results));
    }
    return (<>
        {/* <input placeholder="Введите название фильма" onChange = {inputHandler} />
        <button type='button' onClick={searchMovies}>Поиск</button> */}
        {/* <HomePage /> */}
        {/* <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} /> */}
        {/* <MoviesPage/> */}
        {/* <ul>
             {data.map(item => {
            return <li>{item.original_title}</li>
        })} 
        </ul> */}
    </>)
}
export default App;
