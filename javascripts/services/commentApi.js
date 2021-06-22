class CommentApi {

    static fetch = (homeId) => {        
        fetch(`http://127.0.0.1:3000/homes/${homeId}/comments`)
        .then(response => response.json())
        .then(json => json.forEach(commentJSON => {
            const comment = new Comment(commentJSON)
            comment.render()
        }))
    }

    // static submitComment(event){
    //     event.preventDefault()
    //     const form = document.querySelector('#new-comment-form')
    //     const configObj = {
    //         method: "POST", 
    //         headers: {
    //             "Content-type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({
    //             comment: {
    //                 content: form.querySelector('#comment-content-input').value
    //                 // do i need to add the home_id 
    //             }
    //         })
    //     }

    //     fetch(commentURL, configObj)
    //     .then(res => res.json())
    //     .then(data => {
    //         let newComment = new Comment(data)  
    //         newComment.render()
    //     })

    //     form.reset()
    // }
}
