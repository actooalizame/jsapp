Meteor.methods({
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
  'setSuggested': function(contactId){
		Contacts.update(
			{ _id: contactId },
			{$set: {
				status:"suggested",
			}}
		);
  },
  'insertContact': function(name,phone,email,userId){
		Contacts.insert({
		name: name,
		phone: phone,
		email: email,
		assignedTo: userId,
		status: "initial"
		});
  }
});