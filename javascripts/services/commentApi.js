class CommentApi {

    static fetchComments = () => {
        fetch('http://127.0.0.1:3000/comments')
        .then(response => response.json())
        .then(json => json.forEach(comment => {
            new Comment(comment)
        }))
    }
}
