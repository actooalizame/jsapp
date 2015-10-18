Meteor.methods({
	'insertContact': function(name,phone,email,userId){
		Contacts.insert({
		name: name,
		phone: phone,
		email: email,
		assignedTo: userId,
		status: "initial"
		});
  },
  'setCurrent': function(contactId){
		Contacts.update(
			{ _id: contactId },
			{$set: {
				status:"current",
				changed: new Date()
			}}
		);
  },
  'setUnanswered': function(contactId){
		Contacts.update(
			{ _id: contactId },
			{$set: {
				status:"unanswered",
				changed: new Date()
			}}
		);
  },
  'setOnCall': function(contactId){
		Contacts.update(
			{ _id: contactId },
			{$set: {
				status:"onCall",
				changed: new Date()
			}}
		);
  },
  'setCallLater': function(contactId){
		Contacts.update(
			{ _id: contactId },
			{$set: {
				status:"callLater",
				changed: new Date()
			}}
		);
  },
  'setOrdered': function(contactId){
		Contacts.update(
			{ _id: contactId },
			{$set: {
				status:"ordered",
				ordered: true,
				changed: new Date()
			}}
		);
  },
  'createReminder': function(contactId,hours,minutes){
		Reminders.insert({
			contactId: contactId,
			hours: hours,
			minutes: minutes,
			userId: this.userId,
			changed: new Date()
		});
  },
  'deleteReminder': function(reminderId){
		Reminders.remove({
		_id: reminderId
		});
  },
  'createOrder': function(contactId){
		Orders.insert({
			contactId: contactId,
			status: "unfinished",
			createdAt: new Date()
		});
  },
  'insertProduct': function(orderId,contactId,name){
		Products.insert({
			orderId: orderId,
			contactId: contactId,
			name: name
		});
  },
  'finishOrder': function(orderId){
		Orders.update(
			{ _id: orderId },
			{$set: {
				status:"finished",
			}}
		);
  },
  'setActive': function(userId){
    Meteor.users.update(
			{ _id: userId },
			{$set: {
				active:true,
			}}
		);
  },
  'setInactive': function(userId){
    Meteor.users.update(
			{ _id: userId },
			{$set: {
				active:false,
			}}
		);
  },

});