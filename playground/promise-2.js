const request = require('request');

var geoCodeAddress = (address) => {
  return new Promise((resolve,reject) =>{
    var formattedAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}`,
      json: true
    },(err, response, body)=>{
      if(err){
        reject('There was an error with the Google servers.')                                           //some error with the server
      }else if(body.status==='ZERO_RESULTS'){                 //if an unknown address is entered
        reject('Unable to find that address.')
      }else if(body.status === 'OK'){
        const result = body.results[0];

        resolve({
          resultAddress: result.formatted_address,
          lat: result.geometry.location.lat,
          lng: result.geometry.location.lng
        });
      }
    });
  })
};


geoCodeAddress('19146').then((location) => {
  console.log(location);
}).catch((errorMessage)=>{
  console.log(errorMessage);
});
