async function app() {
    const resp = await fetch("https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=c04c4d588ea04e1542849e5b03feadc9")
    const parsedData = await resp.json()
    console.log(parsedData)
}
app()