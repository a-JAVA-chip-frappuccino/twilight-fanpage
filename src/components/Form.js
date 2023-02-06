import React, { useEffect } from "react";

function Form( { url } ) {

    function handleSubmit(e) {
        e.preventDefault();

        const newComment = {
            "author" : e.target.author.value,
            "comment" : e.target.comment.value
        }

            fetch(url, {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(newComment)
            })
            .then((response) => response.json())
            .then(console.log(newComment))
    }

    return(
        <form onSubmit = { handleSubmit }>
            <br />
            <br />

            <label>Add a Comment:</label>
            <textarea name = 'comment' rows = '10' cols = '35' />

            <br />

            <label>Name:</label>
            <input type = 'text' name = 'author' />

            <br />

            <input type = 'submit' />
        </form>
    )
}

export default Form;