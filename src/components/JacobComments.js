import React, { useEffect } from "react";

import Comment from "./Comment";

function JacobComments() {

    useEffect(() => {
        fetch("http://localhost:8004/jacob_comments")
            .then((response) => response.json())
            .then((comments) => renderComments(comments))
    }, [])

    const comments = function renderComments(comments) {
        comments.map((comment) => {
            return <Comment
                id = {comment.id}
                author = {comment.author}
                comment = {comment.comment}
            />
        })
    }

    return (
        <div></div>
    )

}

export default JacobComments;