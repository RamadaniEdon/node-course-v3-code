const https = require('https')
// const url = "https://api.weatherapi.com/v1/current.json?key=dfaf27037a144e36960163640241603&q=40,-75";
const url = "https://api.geoapify.com/v1/geocode/search?text=Kosovo&format=json&apiKey=2c0fd0b74d644b63be154c7c6012402b";
const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        console.log("EDON",chunk.toString())
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        // console.log(body.body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()