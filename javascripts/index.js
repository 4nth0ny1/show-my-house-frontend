document.addEventListener("DOMContentLoaded", () => {
    HomeApi.fetchHomes()
    CommentApi.fetchComments()

    const homeForm = document.getElementById("home-form")
    const homeInput = document.getElementById("home-input")
    const homeList = document.getElementById("home-list")
    const homeURL = `http://localhost:3000/home`
    const commentURL = `http://localhost:3000/comments`

    homeForm.addEventListener("submit", Home.submitHome)

    Home.fetchHome()



})

