const request = require('request');
const yargs = require('yargs');
const addressRequest = require('./geocode/address_request.js');

// var yargv = yargs
// .option({
//   address: {
//     demand: true,
//     alias: 'a',
//     describe: 'Street address to fetch weather',
//     string: true
//   }
// })
// .option({
//   city: {
//     demand: true,
//     alias: 'c',
//     describe: 'city of street address',
//     string: true
//   }
// })
// .help()
// .alias('help','h')
// .argv;
//
// var address=yargv.address;
// var city = yargv.city;
//
// addressRequest.getInfo(address,city, (errorMessage,results) => {
//   if(errorMessage){
//     console.log(errorMessage)
//   }else{
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// })

var lat = 43.6532;
var lng = 79.3832;

var apiKey='61ffb2a214c3605eec479c131c552d1d';

request({
  url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
  json: true
},(err,response,body)=>{
  if(!err && response.statusCode===200){
    console.log(body.currently.temperature);
  }
  else{
    console.log('Unable to fetch weather');
  }
})
