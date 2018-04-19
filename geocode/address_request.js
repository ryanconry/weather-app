const request = require('request');

var getInfo = (address,city,callback) =>{
  var fullAddress = `${address} ${city}`;
  //var formattedAddress = fullAddress.replace(/ /g,'%20');
  var formattedAddress = encodeURIComponent(fullAddress);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}`,
    json: true
  },(err, response, body)=>{
    if(err){
      callback('There was an error with the Google servers.')                                           //some error with the server
    }else if(body.status==='ZERO_RESULTS'){                 //if an unknown address is entered
      callback('Unable to find that address.')
    }else if(body.status === 'OK'){
      const result = body.results[0];

      callback(undefined,{
        resultAddress: result.formatted_address,
        lat: result.geometry.location.lat,
        lng: result.geometry.location.lng
      });
    }
  });
}

module.exports = {
  getInfo
}
