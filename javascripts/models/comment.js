class Comment {

    static all = []

    constructor({id, content, home_id}){
        this.id = id 
        this.content = content 
        this.home_id = home_id 
        Comment.all.push(this)
    }

  

}