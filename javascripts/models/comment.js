class Comment {

    static all = []

    constructor({id, content, home_id}){
        this.id = id 
        this.content = content 
        this.home_id = home_id 
        Comment.all.push(this)
    }

    static createComment(e){
        e.preventDefault()
        const commentInput = e.target.children[0].value
        const commentList = e.target.nextElementSibling
        const homeId = e.target.parentElement.dataset.id

        Comment.submitComment(commentInput, commentList, homeId)
    
        e.target.reset()
    }

    renderComment(commentList){
        const li = document.createElement('li')
        li.dataset.id = this.home_id
        li.innerText = this.content
    
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "X"
        li.appendChild(deleteBtn)
        commentList.appendChild(li)
    
    }

    static submitComment(comment, commentList, homeId){
        fetch(commentURL, {
            method: "POST",
            headers: {
                "Content-type": "application/json", 
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                content: comment, 
                home_id: homeId
            })
        }).then(res => res.json())
        .then(comment => {
            let newComment = new Comment(comment)
            newComment.renderComment(commentList)
        })
    }

}