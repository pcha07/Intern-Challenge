import React from 'react';
import {useState} from 'react';

const SingleItem = ({date,explanation,hdurl,title,removeItem}) => {
    const [readMore,setReadMore] = useState(false);
    const [like,setLike] = useState(false);

    return (
        <article className="single-item">
            <img src={hdurl} alt={title}/>
            <footer>
                <div className="item-info">
                    <h4>{title}</h4>
                    <h4 className="item-date">{date}</h4>
                </div>
                <p className="explanation">
                    {readMore ? explanation: `${explanation.substring(0,200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => setLike(!like)}>{!like ? 'Like' : 'Liked'}</button>
                <button className="delete-btn" onClick={() => removeItem(date)}>
                    Remove
                </button>
            </footer>
        </article>
    )
    
}

export default SingleItem;