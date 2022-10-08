import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { instance, category } from '../api/axios'

const Search = ({ search, setSearch }) => {
    const navigate = useNavigate();
    const [sc, setSc] = useSearchParams({});
    const [searchMovie, setSearchMovie] = useState([])

    const sItm = sc.get('query');

    useEffect(() => {
        getMovie();
    }, [sItm]);


    const getMovie = async () => {
        const getmovie = await instance.get(`/search/movie?query=${sItm}`);
        const movieSearch = getmovie.data.results;
        console.log(movieSearch)
        setSearchMovie(movieSearch);
    }


    const sarchHandler = () => {
        navigate(`/search/movie?query=${sItm}`)
    }


    return (
        <div>
            <input onChange={e => setSc({ query: e.target.value })} />
            <button onClick={sarchHandler}>search</button>
            {search}
            {console.log(sItm, sc)}

            <section>
                {
                    sItm && <>
                        {
                            searchMovie.map((it, idx) => {
                                return (
                                    <span>
                                        <Link to={'/detail/' + it.id}>{it.title}</Link>  /
                                    </span>
                                )

                            })
                        }
                    </>
                }

            </section>
        </div>
    )
}

export default Search