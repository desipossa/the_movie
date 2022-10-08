import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { instance, category } from '../api/axios'

const MovieList = ({ movie, setMovie, genres, setGenres, page, setPage, genrelist, setGenrelist }) => {
    const [list, setlist] = useSearchParams();
    const with_genres = list.get('with_genres');
    const with_pages = list.get('page');
    console.log(with_genres, with_pages)


    useEffect(() => {
        getMovie();
    }, [with_genres, with_pages]);


    const getMovie = async () => {
        const getmovie = await instance.get("/discover/movie?with_genres=" + with_genres + "&page=" + with_pages);
        const getcategory = await instance.get(category.MoviesGenre);
        const movie = getmovie.data.results;
        const list = getcategory.data.genres;
        setMovie(movie);
        setGenrelist(list)

        console.log(getmovie.data.total_pages, genres);
    }

    return (
        <>
            <ul className='inner'>
                {
                    genrelist.map((it, idx) => {
                        return (
                            <li key={idx}>
                                <Link to={`/discover/movie?with_genres=${it.id}&page=${page}`} >{it.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className='inner'>
                {
                    genrelist.slice(0, 10).map((it, idx) => {
                        return (
                            <li key={idx}><button onClick={() => setlist({ with_genres: with_genres, page: idx + 1 })}>{idx + 1}</button></li>
                        )
                    })
                }

            </ul>
            <div className='inner list'>

                {
                    movie.map((it, idx) => {
                        return (
                            <figure key={idx}>
                                <Link to={'/detail/' + it.id}>
                                    <img src={"https://image.tmdb.org/t/p/w500/" + it.poster_path} />
                                    {it.id} {it.name ? it.name : it.title}</Link>
                            </figure>
                        )
                    })
                }
            </div>

        </>

    )
}

export default MovieList