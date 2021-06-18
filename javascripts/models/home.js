class Home {

    static all = []

    constructor({id, address, description, price}){
        this.id = id 
        this.address = address
        this.description = description
        this.price = price
        Home.all.push(this) 
    }

    static renderHomes(){
        for(let home of this.allHomes){
            home.renderHome()
        }
    }

    static fetchHomes(){
        fetch(homeURL)
        .then(res => res.json())
        .then(homes => {
            for(let home of homes){
                let newList = new Home(home.data)
            }
            this.renderHomes()
        })
    }

    renderHome(){
        const li = document.createElement('li')
        li.dataset.id = this.id
    
        const p = document.createElement('p')
        p.innerText = this.address
    
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "delete"
        deleteBtn.addEventListener("click", this.deleteHome)
    
        const commentForm = document.createElement('form')
        commentForm.innerHTML += `<input type="text" id="comment-input"><input type="submit">`
        commentForm.addEventListener("submit", Comment.createComment)
    
        const commentList = document.createElement('ul')
        this.comments.forEach(comment => {
            let commentObj = new Comment(comment)
            console.log(commentObj)
            commentObj.renderComment(commentList)
        })
    
        li.append(p, deleteBtn, commentForm, commentList)
    
        homeList.appendChild(li)
        
        homeForm.reset()
    }

    static submitHome(){
        event.preventDefault()
        const configObj = {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                address: homeInput.value
            })
        }
    
        fetch(homeURL, configObj)
        .then(res => res.json())
        .then(data => {
            let newHome = new Home(data.data)
            newHome.renderHome()
        })
    
    }


    deleteHome(){
        const homeId = this.parentElement.dataset.id
    
        fetch(`${homeURL}/${homeId}`, {
            method: "DELETE"
        })
    
        this.parentElement.remove()
    }


    


}

