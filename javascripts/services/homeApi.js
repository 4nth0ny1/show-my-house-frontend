class HomeApi {

    // class function to fetch the home json (home objects)
    static fetchHomes = () => {
        fetch('http://127.0.0.1:3000/homes')
        .then(response => response.json())
        .then(json => json.forEach(home => {
            new Home(home)
        }))
    }
}



