import React from "react";
import PropTypes from "prop-types"


function Movie ({ coverImg, title, summary, genres }) {
    return(
        <React.Fragment>
            <img src={coverImg} alt={title}/>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
            <li>
                {genres?.map((g) =>(
                <li key={g}>{g}</li>
                ))}
            </li>
            </ul>
        </React.Fragment>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Movie;