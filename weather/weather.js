const request = require('request')

var getWeather = (latitude, longitude) =>{
return new Promise((resolve, reject)=>{
    request({
        url : `https://api.darksky.net/forecast/93db09bbb7c2b01350548a222ac857a6/${latitude},${longitude}`,
        json: true 
    },(error, response, body) =>{
        if(!error && response.statusCode == 200){
            resolve({
                tempFahrenheit : body.currently.temperature,
                tempCelsius : (parseFloat(body.currently.temperature) -32) /1.8,
                actualTemperature : body.currently.apparentTemperature
            })
            
            
        }
        else{
            reject("Unable to fetch weather information")
        } 
        
    })
})
}

module.exports.getWeather = getWeather