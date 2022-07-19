const date = new Date(), thisYear = date.getFullYear()
const yearSpan = document.querySelector('#current-year')

window.onload = () => {
    yearSpan.innerText = thisYear
}