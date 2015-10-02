Meteor.publish('userData', function() {
    return Meteor.users.find({}, {fields: {hook: 1,active: 1,onCall:1}});
});