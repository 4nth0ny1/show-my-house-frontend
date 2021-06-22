class Comment {

    static all = []

    constructor({id, content, home}){
        this.id = id 
        this.content = content 
        this.homeId = home.id
        Comment.all.push(this)
    }

    static findCommentById(commentId){
        return Comment.all.find(comment => comment.id === commentId)
    }

    render(){
        if (document.querySelector(`#comment-${this.id}`)){
            return
        }
        const homeDiv = document.getElementById(`home-${this.homeId}`)
        const div = document.createElement('div')
        
        div.id = `comment-${this.id}`
        div.classList.add('comment')
        div.innerHTML = `
            <li class="comment-info">${this.content}</li>
        `

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-comment-button')
        deleteButton.dataset.commentId = this.id 
        deleteButton.innerText = "Delete Comment"

        const editButton = document.createElement('button')
        editButton.classList.add('edit-comment-button')
        editButton.dataset.commentId = this.id 
        editButton.innerText = "Edit Comment"

        div.appendChild(editButton)
        div.appendChild(deleteButton)
        homeDiv.appendChild(div)

        editButton.addEventListener('click', Comment.editComment)
    }

    static editComment(event){
        const commentId = event.target.dataset.commentId
        const comment =  Comment.findCommentById(parseInt(commentId))
        comment.renderCommentEditForm()

    }

    renderCommentEditForm(){
        const container = document.getElementById(`comment-${this.id}`)
        const commentInfo = container.querySelector('.comment-info')
       
        commentInfo.classList.add('d-none')
        
        const form = `
         <form data-comment-id='${this.id}' class="edit-comment-form">
             <label for="content">Content</label>
             <input type="text" id="comment-content-input" name="content" value="${this.content}">
             <input type="submit">
         </form>
         <br>
        `
 
        const formContainer = document.createElement('div')
        formContainer.classList.add('edit-form-container')
        formContainer.innerHTML = form
        container.prepend(formContainer)
        container.querySelector('.edit-comment-button').classList.add('d-none')
        container.querySelector('.edit-comment-form').addEventListener('submit', CommentApi.submitCommentEdit)
     }

    static handleViewCommentClick(e){
        const homeId = e.target.dataset.homeId
        CommentApi.fetch(homeId)
        const button = document.createElement('button')
        button.innerText = "Add Comment"
        button.dataset.homeId = homeId
        const homeDiv = document.querySelector(`#home-${homeId}`)
        homeDiv.appendChild(button)
    
    }


  

}