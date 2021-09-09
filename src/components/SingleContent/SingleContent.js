import React from 'react';
import { img_300, unavailable } from '../../config/config';
import './SingleContent.css';

const SingleContent = (props) => {
    const {id, poster, title, date, media_type, vote_average} = props;
    // console.log(props);
    return (
        <div>
            <img src={ poster? `${img_300}/${poster}` : unavailable} alt={title} />
        </div>
    );
};

export default SingleContent;