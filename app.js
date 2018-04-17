const yargs = require('yargs');
const addressRequest = require('./address_request.js');
var request = require('request');


var yargv = yargs
.option({
  address: {
    demand: true,
    alias: 'a',
    describe: 'Street address to fetch weather',
    string: true
  }
})
.option({
  city: {
    demand: true,
    alias: 'c',
    describe: 'city of street address',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

var address=yargv.address;
var city = yargv.city;


if(!address){
  console.log('No address provided.');
}else if(!city){
  console.log('No city provided.')
}else{

  var fullAddress = `${address} ${city}`;
  //var formattedAddress = fullAddress.replace(/ /g,'%20');
  var formattedAddress = encodeURIComponent(fullAddress);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}`,
    json: true
  },(err, response, body)=>{
    if(err){                                               //some error with the server
      console.log('There was an error with the Google servers.');
      console.log(err);
    }else if(body.status==='ZERO_RESULTS'){                 //if an unknown address is entered
      console.log('Unable to find that address.')
    }else if(body.status === 'OK'){
      var resultObject={};
      const result = body.results[0];
      //console.log(JSON.stringify(body,undefined,2))
      resultObject.resultAddress= result.formatted_address,
      resultObject.lat= result.geometry.location.lat,
      resultObject.lng= result.geometry.location.lng
      // return resultObject;
      console.log(resultObject);
    }
  });
  //requestObject=addressRequest.getInfo(address,city);
  //console.log(requestObject);

}
