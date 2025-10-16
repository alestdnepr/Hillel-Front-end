document.getElementById("popup").addEventListener("click", function () {
    document.getElementById("mainform").classList.add("open")
})

document.getElementById("close-mainform").addEventListener("click", function () {
    document.getElementById("mainform").classList.remove("open")
})



document.getElementById("main-checkbox").addEventListener("click", function () {
    document.getElementById("change-field").setAttribute("type", "password")
})

document.getElementById("main-checkbox").addEventListener("change", function () {
    document.getElementById("change-field").setAttribute("type", "text")
})