$(document).ready(() => {
    loadComponents = window.onload = () => {
        $('#header').load('../components/header.html')
        $('#downloads').load('../components/downloads.html')
        $('#footer').load('../components/footer.html')
    }
})