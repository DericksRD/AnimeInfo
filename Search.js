document.addEventListener('DOMContentLoaded', function() {
    //Make sure that the localStorage have the information for the request:
    if (localStorage.length > 1) {
        getAnime(localStorage.getItem('animeName'))
    }

})

async function getAnime(animeName) {

    console.log(animeName)
    let url = "https://kitsu.io/api/edge/anime?filter[text]="

    try {
        const response = await fetch(`${url}${animeName}`)
        const data = await response.json()

        console.log(data)
        showData(data)
    } catch (e) {
        console.log(`Ha ocurrido un error: ${e}`)
    }
}

function showData(animes) {
    //Imprime la data de los elementos en pantalla
}