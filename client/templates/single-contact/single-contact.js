Template.contactDetails.helpers({
	'hasReminder': function(){
		var contactId = this._id,
				reminders = Reminders.find({contactId:contactId});
		if(reminders.count()>0){
			return true;
		}
	},
	'reminder': function(){
		var contactId = this._id;
		return Reminders.findOne({contactId:contactId});
	}
});

Template.contactDetails.events({
	'submit .call-later': function(e){
		e.preventDefault();
		var contactId = this._id;
		var hours = e.target.hours.value,
				minutes = e.target.minutes.value;
		Meteor.call('setCallLater',contactId);
		Meteor.call('createReminder', contactId,hours,minutes);
		Router.go('initialContacts');
	}
});