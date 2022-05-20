import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Movie from "../component/Movie";

function Detail() {
    const[movie, setMovie] = useState([]);
    const[loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(()=>{
        const getMovies = async () => {
            const json = await(
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovie(json.data.movie);
            setLoading(false);
        }
        getMovies();
    }, []);

    return (
        <React.Fragment>
            <Link to="/"><button>Home</button></Link>
            {loading? 
            <h1>loading...</h1>
              : movie&&(<Movie 
                detail
                coverImg={movie.large_cover_image} 
                title={movie.title}
                url={movie.url}
                genres = {movie.genres}
            />)}
        </React.Fragment>
    )
}
export default Detail;