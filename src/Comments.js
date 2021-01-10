import React from 'react'


const Comments = (props) => {
    return (
        <>
           
               <div className="comment">
                  
                    <div className="content">
                        <a href="/" className="author">
                            {props.author}
                        </a>
                        <div className="metadata">
                            <span className="date">Today at {props.time}</span>
                        </div>
                        <div className="text">{props.commentText}</div>
                    </div>
               </div>
           
        </>
    )
}

export default Comments;
