class HomeApi {

    // class function to fetch the home json (home objects)
    static fetchHomes = () => {
        fetch('http://127.0.0.1:3000/homes')    //fetching json
        .then(response => response.json())      //takes whatever from the rails server defined in the controller.  this response is an array 
        .then(json => json.forEach(homeJSON => {   // bexause it's an array we need to iterate using forEach
            const home = new Home(homeJSON)        // THIS IS A HOME OBJECT INSTANCE
            home.render()
        }))
    }

    static submitHome(event){
        event.preventDefault()
        const form = document.querySelector('#new-home-form')
        const configObj = {
            method: "POST", 
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                home: {
                    address: form.querySelector('#home-address-input').value,
                    description: form.querySelector('#home-description-input').value,
                    price: form.querySelector('#home-price-input').value
                }
            })
        }

        fetch(homeURL, configObj)
        .then(res => res.json())
        .then(data => {
            let newHome = new Home(data)  
            newHome.render()
        })

        form.reset()

    }

    static deleteHome(event){
        const homeId = event.target.dataset.homeId

        document.getElementById(`home-${homeId}`).remove()

        fetch(`${homeURL}/${homeId}`, {
            method: "DELETE"
        })
        
    }
  


}



