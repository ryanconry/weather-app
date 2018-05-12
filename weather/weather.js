const request = require('request');

var getWeather = (lat,lng,apiKey) => {
  return new Promise((resolve,reject)=>{
    request({
      url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
      json: true
    },(err,response,body)=>{
      if(!err && response.statusCode===200){
        resolve(body.currently.temperature);
      }
      else{
        reject('Could not retrieve the temperature.');
      }
    })
  })
};


module.exports = {
  getWeather
};
