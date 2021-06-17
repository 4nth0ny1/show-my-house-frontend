class Home {

    static all = []

    constructor({id, address, description, price}){
        this.id = id 
        this.address = address
        this.description = description
        this.price = price
        Home.all.push(this) 
    }

}