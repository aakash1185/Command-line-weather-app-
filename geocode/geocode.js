const request = require('request')

const geocodeAddress = (address) =>{
return new Promise((resolve, reject) =>{
    encodedAddress = encodeURI(address)
    request({
        url : `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAsnLUH8ZvY4JxIVmkSToidhq5ydGqz3FQ&address=${encodedAddress}`,
        json : true
    }, (error, response, body) => {
        if(error){
            reject('Unable to connect to Google servers')
        }else if(body.status === 'ZERO_RESULTS'){
            reject('Unable to find that address')
        }else if(body.status ==='OK'){
            resolve({
                address : body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
    })
    
})
    
    
}

module.exports.geocodeAddress = geocodeAddress;

// 93db09bbb7c2b01350548a222ac857a6