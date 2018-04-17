var getUser = (id, callback) => {
  var user ={
    id: id,
    name: 'Vikram'
  };
  callback(user)

};

getUser(32,(userObject) => {
  console.log(userObject);
});
