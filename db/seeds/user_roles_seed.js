var bcrypt = require('bcrypt');
var adminId;
function makeAdmin() {
  return {
    name: 'James',
    email: 'james.meisler@gmail.com',
    mobile_phone: '+13344623292',
    password: bcrypt.hashSync('omgwtf', 10)
  }
}

function makeRoles() {
  return [{ label: 'user' }, {label: 'administrator'}];
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('user').del(),
    knex('role').del(),
    knex('user_role').del()
  ]).then(function () {
      // Inserts seed entries
      return Promise.all([ 
        knex('user').insert([
          makeAdmin(),
       ], 'id'),
       knex('role').insert(
         makeRoles(),
         ['id', 'label']
       )
    ]).then(function([user, roles]) {
        adminId = user.id;
        let userRoles = [];
        roles.forEach(function(role) {
          userRoles.push({
            user_id: user[0],
            role_id: role.id
          })
        });
        return knex('user_role').insert(userRoles);
      });
    })
}


