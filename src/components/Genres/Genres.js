import { Chip } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';

const Genres = (props) => {
    const { type, selectedGenres, setSelectedGenres, genres, setGenres, setPage } = props;
    // console.log(props);


    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };
    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    };

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

        setGenres(data.genres);
    };

    // console.log(genres);
    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});// unmounting
        };
        // eslint-disable-next-line
    }, [])

    return (
        <div style={{ padding: "6px 0" }}>
            {
                selectedGenres &&
                selectedGenres.map((genre) => (
                    <Chip
                        label={genre.name}
                        key={genre.id}
                        style={{ margin: 2 }}
                        size='small'
                        color='primary'
                        clickable
                        onDelete={() => handleRemove(genre)}
                    />
                ))
            }
            {
                genres &&
                genres.map((genre) => (
                    <Chip
                        label={genre.name}
                        key={genre.id}
                        style={{ margin: 2 }}
                        size='small'
                        clickable
                        onClick={() => handleAdd(genre)}
                    />
                ))
            }
        </div>
    );
};

export default Genres;