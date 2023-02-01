import React from "react";

function Comment( {id, author, comment} ) {

    console.log("reached")

    return (
        <div>
            <p>{comment}</p>
            <p>{author}</p>
        </div>
    )
}

export default Comment;