import React, { useEffect } from "react";

import Comment from "./Comment";

function EdwardComments() {

    useEffect(() => {
        fetch("http://localhost:8004/edward_comments")
            .then((response) => response.json())
            .then((comments) => renderComments(comments))
    }, [])

    function renderComments(comments) {
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

export default EdwardComments;