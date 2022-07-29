currentDates = document.getElementsByClassName('current-year')

for (let i = currentDates.length - 1; i >= 0; --i) {
    currentDates[i].innerHTML = new Date().getFullYear()
}