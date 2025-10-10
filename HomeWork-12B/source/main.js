document.getElementById("popup").addEventListener("click", function () {
    document.getElementById("mainform").classList.add("open")
})

document.getElementById("close-mainform").addEventListener("click", function () {
    document.getElementById("mainform").classList.remove("open")
})
