const burger = document.querySelector(".burger");
const list = document.querySelector('ul')

burger.addEventListener('click', () => {
    burger.classList.toggle("active");
    list.classList.toggle("active")
})