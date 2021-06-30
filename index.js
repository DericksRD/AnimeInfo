document.addEventListener('DOMContentLoaded', function() {
    function ChangeSlide() {
        i = (i >= 2) ? 0 : ++i
        buttons[i].checked = true
    }


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