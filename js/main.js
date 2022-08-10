// main app handling, runs on page load
window.onload = () => {
    loadComponent('/components/navbar.html', '#navbar')
    loadComponent('/components/hexCluster.html', '#hex-cluster')
    loadComponent('/components/downloads.html', '#downloads')
    loadComponent('/components/footer.html', '#footer')

    updateYearTags()
    updatePageTitles()
}

// function for injecting reusable components
const loadComponent = (path, to) => {
    fetch(path)
        .then((response) => { return response.text(); })
        .then((result) => {
            let parser = new DOMParser(),
                data = parser.parseFromString(result, 'text/html'),
                component = data.body.querySelector('div')

            if ((component) !== null) {
                document.querySelector(to).append((component))
            }
        })
}

// function for dynamically update page titles
const updatePageTitles = () => {
    let pageName = document.querySelector('main').id
    let pageTitle = document.querySelector('#header .title')

    switch (pageName) {
        default:
        case 'home':
            pageTitle.innerHTML = 'Welcome'
            break
        case 'about':
            pageTitle.innerHTML = 'About Us'
            break
        case 'enrollment':
            pageTitle.innerHTML = 'Enrollment'
            break
    }
}

// script for keeping footer copyright up-to-date
const updateYearTags = () => { }