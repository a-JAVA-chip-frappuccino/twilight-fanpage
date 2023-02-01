import React from "react";

function Comment( {id, author, comment} ) {

    return (
        <div className = 'comment'>
            <p>{comment}</p>
            <p>{author}</p>
        </div>
    )
}

export default Comment;