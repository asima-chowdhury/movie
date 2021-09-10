import React from 'react';
import { img_300, unavailable } from '../../config/config';
import './SingleContent.css';

const SingleContent = (props) => {
    const { id, poster, title, date, media_type, vote_average } = props;
    // console.log(props);
    return (
        <div className="media">
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <strong className="title">{title}</strong>
            <span className="sub-title">
                {media_type === 'tv' ? 'TV Series' : 'Movie'}
                <span className="sub-title">{date}</span>
            </span>
        </div>
    );
};

export default SingleContent;