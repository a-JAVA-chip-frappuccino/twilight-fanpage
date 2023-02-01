import React, { useState, useEffect } from "react";

import Comment from "./Comment";

function JacobComments() {

    const [comments, setComments] = useState('');

    useEffect(() => {
        fetch("http://localhost:8004/jacob_comments")
            .then((response) => response.json())
            .then((comments) => setComments(comments))
    }, [])

    if (!comments) {
        return (
            <div className = "comments"></div>
        )
    }
    else {
        return (
            <div className = "comments">
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

export default JacobComments;