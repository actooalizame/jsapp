Template.userContacts.helpers({
	'contacts': function(){
		return Contacts.find({},{sort:{name:-1}});
	}
});