Meteor.publish('allProducts', function() {
	return Products.find({});
});

Meteor.publish('allOrders', function() {
	return Orders.find({state:"finished"});
});

Meteor.publish('initialContacts', function() {
	var user = Meteor.users.findOne({_id:this.userId}),
			userId = user._id;
	return Contacts.find({status:"initial",assignedTo:userId});
});

Meteor.publish('orderedContacts', function() {
	var user = Meteor.users.findOne({_id:this.userId}),
			userId = user._id;
	return Contacts.find({status:"ordered",assignedTo:userId});
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

Meteor.publish('contactOrders', function(contactId){
	return Orders.find({contactId:contactId});
});

Meteor.publish('contactProducts', function(contactId){
	return Products.find({contactId:contactId});
});

Meteor.publish('orderProducts', function(orderId){
	return Products.find({orderId:orderId});
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



