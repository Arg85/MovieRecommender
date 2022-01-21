import React from 'react'
import { img_300,unavailable } from '../../Config/Config'
import './SingleContent.css'
function SingleContent({id,poster,title,date,media_type,vote_average}) {
    return (
        <div key={id} className='media'>
        <img className="image" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
        <b className='title'>{title}</b>
        <span className='subTitle'>
            {media_type==="tv"?"TV Series" :"Movies"}
        <span>{date}</span>
        </span>
        </div>
    )
}

export default SingleContent
