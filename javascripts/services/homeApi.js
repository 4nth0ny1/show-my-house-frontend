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


}



