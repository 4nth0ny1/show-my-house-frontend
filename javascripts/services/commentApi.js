class CommentApi {

    static fetch = (homeId) => {        
        fetch(`http://127.0.0.1:3000/homes/${homeId}/comments`)
        .then(response => response.json())
        .then(json => json.forEach(commentJSON => {
            const comment = new Comment(commentJSON)
            comment.render()
        }))
    }
}
