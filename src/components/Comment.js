import React from "react";

function Comment( {id, author, comment} ) {

    return (
        <div className = 'comment'>
            <h3>{comment}</h3>
            <p>by {author}</p>
        </div>
    )
}

export default Comment;