const yargs = require('yargs')
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')
const argv = yargs
    .options({
        a :{    
            alias: 'address',
            describe : 'Address to fetch weather from',
            string : true
        } 
    })
    .help()
    .alias('help', 'h')
    .argv;

//chaining callbacks to get latlng for address, getWeather, to pass 
    geocode.geocodeAddress(argv.address).then((results)=>{
        {
            console.log(results.address);
            weather.getWeather(results.latitude,results.longitude).then((weatherResults) =>{
                    console.log(JSON.stringify(weatherResults, undefined, 2))
                }
            );
        }
    }).catch((errorMessage) =>{
        console.log(errorMessage)
    })










