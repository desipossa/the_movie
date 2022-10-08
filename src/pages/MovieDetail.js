import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { instance, category } from '../api/axios'

const MovieDetail = ({ movie, setMovie }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movieItm, setMovieItm] = useState({});


    useEffect(() => {
        getMovie();
        console.log(55)
    }, [id]);


    const getMovie = async () => {
        const getmovie = await instance.get(`/movie/${id}`);
        const movieDetail = getmovie.data;
        setMovieItm(movieDetail);
    }

    return (
        <>
            <div>MovieDetail {id}
                <button onClick={
                    () => { navigate(-1) }
                }>BACK</button>
            </div>
            <section>
                <div className='inner detail'>
                    {console.log(movieItm)}
                    <img src={"https://image.tmdb.org/t/p/original/" + movieItm.poster_path} />
                    <div>{movieItm.original_title}</div>
                    <p>{movieItm.overview}</p>
                    <p>{movieItm.release_date}</p>
                    <div>
                        {
                            movieItm.genres ?
                                movieItm.genres.map(it => <strong>{it.name} / </strong>) : null

                        }
                    </div>
                </div>
            </section>

        </>

    )
}

export default MovieDetail