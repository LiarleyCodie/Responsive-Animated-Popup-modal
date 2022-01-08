const closeModal = document.querySelector("#closeModal")
const cancelModal = document.querySelector("#cancel")
const wrappers = document.querySelectorAll(".wrapper")
const hireMeButtons = document.querySelectorAll(".button")

wrappers.forEach(wrapper => {
    hireMeButtons.forEach(hireButton => {
        hireButton.onclick = () => {
            if (hireButton.classList.contains("hire-me")) {
                document.body.classList.add("modal");
            }
        }
    })
})

closeModal.addEventListener("click", () => {
    document.body.classList.toggle("modal")
})

cancelModal.addEventListener("click", () => {
    document.body.classList.toggle("modal")
})