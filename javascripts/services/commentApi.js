class CommentApi {

    static fetch = (homeId) => {        
        fetch(`http://127.0.0.1:3000/homes/${homeId}/comments`)
        .then(response => response.json())
        .then(json => json.forEach(commentJSON => {
            const comment = new Comment(commentJSON)
            comment.render()
        }))
    }

    static submitComment(event){
        event.preventDefault()
        const form = document.querySelector('#new-comment-form')
        const configObj = {
            method: "POST", 
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: {
                    content: form.querySelector('#comment-content-input').value
                    // do i need to add the home_id 
                }
            })
        }

        fetch(commentURL, configObj)
        .then(res => res.json())
        .then(data => {
            let newComment = new Comment(data)  
            newComment.render()
        })

        form.reset()
    }

    static submitCommentEdit(event){
        event.preventDefault()
        const commentId = event.target.dataset.commentId

        const container = document.querySelector(`#comment-${commentId}`)
        const form = container.querySelector('.edit-comment-form')

        const configObj = {
            method: "PATCH", 
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: {
                    content: form.querySelector('#comment-content-input').value
                }
            })
        }

        fetch(`${commentURL}/${commentId}`, configObj)
        .then(res => res.json())
        .then(data => {
            const comment = Comment.findCommentById(parseInt(data.id))
            comment.content = data.content
            comment.reRender()
        })

        form.reset()
    }

    static deleteComment(event){
        const commentId = event.target.dataset.commentId
        
        document.getElementById(`comment-${commentId}`).remove()

        fetch(`${commentURL}/${commentId}`, {
            method: "DELETE"
        })
        
    }

}
