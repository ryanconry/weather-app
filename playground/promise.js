var asyncAdd = (a,b) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      } else {
        reject('Arguments must be numbers');
      }
    },2500);
  });
};

asyncAdd(5,results).then((result) => {
  console.log('Result is: ', result);
  return asyncAdd(res,33);
}).then((result)=>{
  console.log('Should be 45', result);
}).catch((errorMessage)=>{
  console.log(errorMessage);
})

// var somePromise = new Promise((resolve,reject) =>{
//   setTimeout(() => {
//     resolve('Hey. It worked');
//     reject('Unable to fulfill request');
//   },2500);
//
//
// });
//
// somePromise.then((message) =>{
//   console.log(message);
// },(errorMessage) =>{
//   console.log(errorMessage);
// })
