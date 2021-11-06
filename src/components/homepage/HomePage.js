import { useState } from "react";
import axios from "axios";
export function HomePage() {
    const [data, setData] = useState([])
    useState(() => {
          axios
            .get('https://api.themoviedb.org/3/trending/all/week?api_key=e1f4818a0d3fba42c34b00359742bede')
           .then(response => setData(response.data.results))
           .catch(err => console.log(err))
     },[])
    return (<ul>
        {data.map(item => {
            return <li>{item.original_title}</li>
        })} 
    </ul>)
}