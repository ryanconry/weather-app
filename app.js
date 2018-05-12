const request = require('request');
const yargs = require('yargs');
const addressRequest = require('./geocode/address_request.js');
const weather = require('./weather/weather.js');
const apiKey = '61ffb2a214c3605eec479c131c552d1d';

var yargv = yargs
.option({
  address: {
    demand: true,
    alias: 'a',
    describe: 'Street address to fetch weather',
    string: true
  }
})
.help()
.alias('help','h')
.argv;



addressRequest.getInfo(yargv.address)
.then((location)=>{
  console.log(location);
  return weather.getWeather(location.lat,location.lng,apiKey);
}).then((temp)=>{
  console.log('The temp for that location is ', temp);
})



// addressRequest.getInfo(yargv.address,(errorMessage,results) => {
//   if(errorMessage){
//     console.log(errorMessage)
//   }else{
//     var apiKey = '61ffb2a214c3605eec479c131c552d1d';
//     console.log(results.resultAddress);
//     weather.getWeather(results.lat,results.lng,apiKey,(errorMessage,weatherResults)=>{
//       if(errorMessage){
//         console.log(errorMessage);
//       }else{
//         console.log(`The temperature is ${weatherResults}`)
//       }
//     });
//   }
// })
