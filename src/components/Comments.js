import React, { useState, useEffect } from "react";

import Comment from "./Comment";

function Comments( { url } ) {

    const [comments, setComments] = useState('');

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((comments) => setComments(comments))
    }, [comments])

    if (!comments) {
        return (
            <div className = "comments"></div>
        )
    }
    else {
        return (
            <div className = "comments">
                <img src = "../fonts/comments_header.gif" alt = "comments" />
                {comments.map((comment) => (
                    <Comment
                        key = {comment.id}
                        author = {comment.author}
                        comment = {comment.comment}
                    />))}
            </div>
        )
    }

}

export default Comments;