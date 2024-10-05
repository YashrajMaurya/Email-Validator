submitBtn.addEventListener('click', async function (e) {
    resultCont.innerHTML = `<img width="100px" src="img/loading.svg" alt="loading">`
    e.preventDefault()
    let key = 'ema_live_gJuPIFjTd4ikAbYH4RGDygDZMZZ5RTLwju4jWHmE'
    let email = document.getElementById('email').value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ''
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    resultCont.innerHTML = str
})