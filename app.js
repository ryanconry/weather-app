const yargs = require('yargs');
const addressRequest = require('./geocode/address_request.js');

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

addressRequest.getInfo(address,city, (errorMessage,results) => {
  if(errorMessage){
    console.log(errorMessage)
  }else{
    console.log(JSON.stringify(results, undefined, 2));
  }
})
