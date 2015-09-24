/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

(function () {
  'use strict';

var User = require('../api/user/user.model');
var Gym = require('../api/gym/gym.model');
var Pathway = require('../api/pathway/pathway.model')

User.find({}).remove(function() {
  User.create(
    {
    provider: 'local',
    name: {
      first: 'Test',
      last: 'User'
    },
    email: 'test@test.com',
    password: 'test'
    }, {
    provider: 'local',
    is_master: false,
    is_admin: false,
    name: {
      first: 'Brian',
      last: 'Ng'
    },
    pathways: [
      {
        completion: {
          amount_completed: 55
        }
    },
    {
      completion: {
        amount_completed: 69
      }
  }
  ],
    email: 'b@n.com',
    password: 'bng'
    }, {
    provider: 'local',
    is_master: false,
    is_admin: false,
    name: {
      first: 'Mike',
      last: 'Buckley'
    },
    pathways: [
      {
        completion: {
          amount_completed: 55
        }
    },
    {
      completion: {
        amount_completed: 69
      }
    }
    ],
    email: 'm@b.com',
    password: 'mbu'
    },



    {
    provider: 'local',
    is_master: false,
    is_admin: true,
    name: {
      first: 'Matt',
      last: 'Guenther'
    },
    pathways: [
      {
        completion: {
          amount_completed: 55
        }
    },
    {
      completion: {
        amount_completed: 69
      }
  }
  ],
    email: 'm@g.com',
    password: 'mgu'
    },



     {
    provider: 'local',
    is_master: true,
    is_admin: false,
    name: {
      first: 'Brian',
      last: 'DAmore'
    },
    pathways: [
      {
        completion: {
          amount_completed: 55
        }
    },
    {
      completion: {
        amount_completed: 69
      }
  }
  ],
    email: 'b@d.com',
    password: 'bda'
    }

)});

Gym.find({}).remove(function() {
  Gym.create({
    name: "Generator CrossFit"
  }, {
    name: "Test 2"
  });
});

Pathway.find({}).remove(function() {
  Pathway.create({
    pathway: [
      {
        name: "Logos"
      }
    ]}, {
    pathway: [
      {
        name: "Pathos"
      }
    ]}, {
    pathway: [
      {
        name: "Ethos"
      }
    ]});
});

}());
