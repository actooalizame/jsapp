Meteor.publish('initialContacts', function() {
	var user = Meteor.users.findOne({_id:this.userId}),
			userId = user._id;
	return Contacts.find({status:"initial",assignedTo:userId});
});

Meteor.publish('currentContacts', function() {
	var user = Meteor.users.findOne({_id:this.userId}),
			userId = user._id;
	return Contacts.find({status:"current",assignedTo:userId});
});

Meteor.publish('unAnswered', function() {
	var user = Meteor.users.findOne({_id:this.userId}),
			userId = user._id;
	return Contacts.find({status:"unanswered",assignedTo:userId});
});

Meteor.publish('callLater', function() {
	var user = Meteor.users.findOne({_id:this.userId}),
			userId = user._id;
	return Contacts.find({status:"callLater",assignedTo:userId});
});

Meteor.publish('userReminders', function() {
	var user = Meteor.users.findOne({_id:this.userId}),
			userId = user._id;
	return Reminders.find({userId:userId});
});

Meteor.publish('userData', function() {
  return Meteor.users.find({}, {fields: {hook: 1,active: 1,onCall:1}});
});


Meteor.publish('singleContact', function(contactId) {
  return Contacts.find({_id:contactId});
});

Meteor.publish('reminder', function(contactId) {
  return Reminders.find({contactId:contactId});
});



