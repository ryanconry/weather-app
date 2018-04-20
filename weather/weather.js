const request = require('request');

var getWeather = (lat,lng,apiKey,callback) => {
  request({
    url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
    json: true
  },(err,response,body)=>{
    if(!err && response.statusCode===200){
      callback(undefined,body.currently.temperature);
    }
    else{
      callback('Could not retrieve the temperature.');
    }
  })
}

module.exports = {
  getWeather
};
