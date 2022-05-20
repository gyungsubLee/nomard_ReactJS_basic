import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Movie.module.css"


function Movie ({ id, coverImg, title, year,summary, genres, detail, url }) {
    if(detail){
        return(
            <React.Fragment>
                <img src={coverImg} alt={title}/>
                <a href={url} target="_blank" >
                    <h2>{title}</h2>
                </a>
                <h3>{year}</h3>
                {genres?.map((g) =>(
                <li key={g}>{g}</li>
                ))}
            </React.Fragment>
        );
    };

    return(
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img}/>
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie__genres}>
                    {genres?.map((g) =>(
                    <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;