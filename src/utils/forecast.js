const request = require('request')
const forecast = (latitude, longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8cb4845f71e8a53860adeca999659efd&query=' + latitude + ',' + longitude + '&units=f'
    request ({url  , json : true } , (error , {body}) => {
        if(error) {
            callback('Unable to connect to location services!' , undefined)
        } else if(body.error) {
            callback('unable to find location' , undefined)
        } else {
            callback(undefined , body.current.weather_descriptions[0]+" .It is currently " + body.current.temperature + " degress out there.It feels like " + body.current.feelslike + " degress out")
        }
    })
}
module.exports = forecast