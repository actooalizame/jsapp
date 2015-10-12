Template.createContact.events({
	'submit .add-contact': function(e){
		e.preventDefault();
		var name = e.target.firstName.value,
				tel = e.target.tel.value,
				email = e.target.email.value,
				assigned = e.target.assigned.value;
		Meteor.call('insertContact', name,tel,email,assigned);
	}
});