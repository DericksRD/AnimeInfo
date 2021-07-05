document.addEventListener('DOMContentLoaded', function() {
    function ChangeSlide() {
        i = (i >= 2) ? 0 : ++i
        buttons[i].checked = true
    }

    const searchInput = document.querySelector('.header--search-input')
    const searchIcon = document.querySelector('.header--search-icon')

    searchIcon.addEventListener('click', function() {
        if (searchInput.value == "") {
            alert("Debe escribir lo que desea buscar primero")
                // break
        } else {
            localStorage.setItem('animeName', searchInput.value)
            window.location = "Search.html"
        }
    })

    /**START ***/

    //Changing slides:
    const buttons = document.querySelectorAll('.slide--element input')
    buttons[0].checked = true

    let i = 0
    setInterval(ChangeSlide, 10000)

    //Redirect when click any of the slides:
    const slideImg = document.querySelectorAll('.slide--img')
    slideImg.forEach(img => {
        img.addEventListener('click', function() {
            window.location = "About.html"
        })
    })
})