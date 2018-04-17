const request = require('request');

var getInfo = (address,city) =>{
  var resultObject = {};
  var fullAddress = `${address} ${city}`;
  var formattedAddress = fullAddress.replace(/ /g,'%20');

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}`,
    json: true
  },(err, response, body)=>{
    if(err){
      console.log('There was an error with the request.');
    }else{
      const result = body.results[0];
      //console.log(JSON.stringify(body,undefined,2))
      resultObject.resultAddress= result.formatted_address,
      resultObject.lat= result.geometry.location.lat,
      resultObject.lng= result.geometry.location.lng
      // return resultObject;
      console.log(resultObject);
    }
    return resultObject;
  });
  // return resultObject;
}

module.exports = {
  getInfo
}
