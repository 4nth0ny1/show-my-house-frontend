class Home {

    static all = []

    constructor({id, address, description, price}){
        this.id = id 
        this.address = address
        this.description = description
        this.price = price
        Home.all.push(this) 
    }

    

    render(){
        const homesDiv = document.getElementById('homes-container')

        const div = document.createElement('div')
        div.id = `home-${this.id}`       //adding an attribute to the div we just created 
        div.classList.add('home-item')   //adding a class to the div for css 
        div.innerHTML = `
            <h1>${this.address}</h1>
            <h1>${this.description}</h1>
            <h1>${this.price}</h1>
        `

        const button = document.createElement('button')
        button.dataset.homeId = this.id   //dataset allows you to use the value in another function instead of line 19 where it can only be used for css
        button.innerText = "View Comments"
        div.appendChild(button)
        homesDiv.appendChild(div)

        button.addEventListener('click', Comment.handleViewCommentClick)

    }


  
    


}

