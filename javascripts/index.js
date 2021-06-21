const homeURL = 'http://127.0.0.1:3000/homes'
const newHomeForm = document.getElementById("new-home-form")
const homeInput = document.getElementById("home-input")
const commentURL = 'http://127.0.0.1:3000/comments'

document.addEventListener("DOMContentLoaded", () => {
    HomeApi.fetchHomes()



    newHomeForm.addEventListener("submit", HomeApi.submitHome)






})

