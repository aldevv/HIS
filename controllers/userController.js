var User = require('../models/user');

// Display existent users
exports.list_users = function(req, res) {
  res.render('index', { title: 'App running' });
};

//Create a new user
exports.create_user = async function(req,res) {
  const users = await User.findAll();
  console.log(users.every(user => user instanceof User)); // true
  console.log("All users:", JSON.stringify(users, null, 2));
};

//Delete a specific user
exports.delete_user = function(req,res) {
  res.send('NOT IMPLEMENTED: User Deletion')
};

//Update Specific User
exports.update_user =function(req,res) {
  res.send('NOT IMPLEMENTED: User Updated')
};

