class Comment {

    static all = []

    constructor({id, content, home}){
        this.id = id 
        this.content = content 
        this.homeId = home.id
        Comment.all.push(this)
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
            <li>${this.content}</li>
        `
        homeDiv.appendChild(div)
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