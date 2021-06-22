class Home {

    static all = []

    constructor({id, address, description, price}){
        this.id = id 
        this.address = address
        this.description = description
        this.price = price
        Home.all.push(this) 
    }

    static findById(homeId){
        return Home.all.find(home => home.id === homeId)
    }

    render(){
        const homesDiv = document.getElementById('homes-container')

        const div = document.createElement('div')
        div.id = `home-${this.id}`       //adding an attribute to the div we just created 
        div.classList.add('home-item')   //adding a class to the div for css 
        div.innerHTML = `
            <div class="home-info">
                <h1>${this.address}</h1>
                <h1>${this.description}</h1>
                <h1>${this.price}</h1>
            </div>
        `

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-home-button')
        deleteButton.dataset.homeId = this.id 
        deleteButton.innerText = "Delete Home"

        const editButton = document.createElement('button')
        editButton.classList.add('edit-home-button')
        editButton.dataset.homeId = this.id 
        editButton.innerText = "Edit Home"

        const button = document.createElement('button')
        button.dataset.homeId = this.id   //dataset allows you to use the value in another function instead of line 19 where it can only be used for css
        button.innerText = "View Comments"
        div.appendChild(button)
        homesDiv.appendChild(div)

        div.appendChild(editButton)
        div.appendChild(deleteButton)

        button.addEventListener('click', Comment.handleViewCommentClick)
        deleteButton.addEventListener('click', HomeApi.deleteHome)
        editButton.addEventListener('click', Home.editHome)
    }

    static editHome(event){
        const homeId = event.target.dataset.homeId
        const home =  Home.findById(parseInt(homeId))
        home.renderEditForm()
    }

    renderEditForm(){
       const container = document.getElementById(`home-${this.id}`)
       const homeInfo = container.querySelector('.home-info')
        debugger
       homeInfo.classList.add('d-none')

       const form = `
        <form data-home-id='${this.id}' class="edit-home-form">
            <label for="address">Address</label>
            <input type="text" id="home-address-input" name="address" value="${this.address}">
            <label for="description">Description</label>
            <input type="text" id="home-description-input" name="description" value="${this.description}">
            <label for="price">Price</label>
            <input type="text" id="home-price-input" name="price" value="${this.price}">
            <input type="submit">
        </form>
        <br>
       `

       const formContainer = document.createElement('div')
       formContainer.classList.add('edit-form-container')
       formContainer.innerHTML = form
       container.prepend(formContainer)
       container.querySelector('.edit-home-button').classList.add('d-none')
       container.querySelector('.edit-home-form').addEventListener('submit', HomeApi.submitEdit)
    }

    reRender(){
        const div = document.querySelector(`#home-${this.id}`)
        div.innerHTML = `
            <div class="home-info">
                <h1>${this.address}</h1>
                <h1>${this.description}</h1>
                <h1>${this.price}</h1>
            </div>
        `

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-home-button')
        deleteButton.dataset.homeId = this.id 
        deleteButton.innerText = "Delete Home"

        const editButton = document.createElement('button')
        editButton.classList.add('edit-home-button')
        editButton.dataset.homeId = this.id 
        editButton.innerText = "Edit Home"

        const button = document.createElement('button')
        button.dataset.homeId = this.id   //dataset allows you to use the value in another function instead of line 19 where it can only be used for css
        button.innerText = "View Comments"

        div.appendChild(button)
        div.appendChild(editButton)
        div.appendChild(deleteButton)

        button.addEventListener('click', Comment.handleViewCommentClick)
        deleteButton.addEventListener('click', HomeApi.deleteHome)
        editButton.addEventListener('click', Home.editHome)
    }




}

