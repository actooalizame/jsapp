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
			}}
		);
  },
  'setUnanswered': function(contactId){
		Contacts.update(
			{ _id: contactId },
			{$set: {
				status:"unanswered",
			}}
		);
  },
  'setOnCall': function(contactId){
		Contacts.update(
			{ _id: contactId },
			{$set: {
				status:"onCall",
			}}
		);
  },
  'setCallLater': function(contactId){
		Contacts.update(
			{ _id: contactId },
			{$set: {
				status:"callLater",
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
'	setActive': function(userId){
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